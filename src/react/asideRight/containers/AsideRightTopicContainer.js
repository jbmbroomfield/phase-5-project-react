import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { subscribeToTopic } from 'redux/actions/userTopicsActions'
import { editTopic } from 'redux/actions/topicsActions'
import { addViewer, addPoster } from 'redux/actions/topicsActions'


import PageControlContainer from './PageControlContainer'
import WhoCanViewContainer from './WhoCanViewContainer'
import WhoCanPostContainer from './WhoCanPostContainer'
import Subscribe from '../components/Subscribe'
import TopicUsersContainer from './TopicUsersContainer'
import MenuItemContainer from './MenuItemContainer'
import TopicSettings from '../components/TopicSettings'
import Filter from '../components/Filter'

import { excludeAllUsers, includeAllUsers, toggleFlagFilter, toggleUserFilter } from 'redux/actions/topicDisplaysActions'

import getTopicDisplay from 'getTopicDisplay'

const AsideRightTopicContainer = ({
    match,
}) => {

    const dispatch = useDispatch()

    const userTopics = useSelector(state => state.userTopics)
    const topicDisplays = useSelector(state => state.topicDisplays)
    const topics = useSelector(state => state.topics)
    const currentUser = useSelector(state => state.currentUser)

    const subsectionSlug = match.params.subsectionSlug
    const topicSlug = match.params.topicSlug
    const topic = topics.find(topic => {
        return topic.attributes?.slug === topicSlug
    })
    const topicAttributes = topic ? topic.attributes : {}
    const topicId = topic && parseInt(topic.id)
    const topicDisplay = getTopicDisplay(topicDisplays, topicSlug)
    const userTopic = userTopics.find(
        userTopic => userTopic.attributes.topic_slug === topicSlug
    )
    const subscribed = userTopic && userTopic.attributes.subscribed
    const handleSubscribe = () => {
        dispatch(subscribeToTopic(topicId, true))
    }
    const handleUnsubscribe = () => {
        dispatch(subscribeToTopic(topicId, false))
    }
    const {page, pages} = topicDisplay

    const renderOwnerSettings = () => {
        return (
            <>
                <WhoCanViewContainer
                    whoCanView={topicAttributes.who_can_view}
                    editTopic={attributes => dispatch(editTopic(subsectionSlug, topicSlug, attributes))}
                />
                <WhoCanPostContainer
                    whoCanView={topicAttributes.who_can_view}
                    whoCanPost={topicAttributes.who_can_post}
                    editTopic={attributes => dispatch(editTopic(subsectionSlug, topicSlug, attributes))}
                />
            </>
        )
    }
    
    const renderUsersContainer = () => <TopicUsersContainer
        users={topicAttributes.viewers}
        handleAdd={userSlug => dispatch(addViewer(subsectionSlug, topicSlug, userSlug))}
        userType="User"
    />

    const renderViewersContainer = () => <TopicUsersContainer
        users={topicAttributes.viewers}
        handleAdd={userSlug => dispatch(addViewer(subsectionSlug, topicSlug, userSlug))}
        userType="Viewer"
    />

    const renderPostersContainer = () => <TopicUsersContainer
        users={topicAttributes.posters}
        handleAdd={userSlug => dispatch(addPoster(subsectionSlug, topicSlug, userSlug))}
        userType="Poster"
    />

    const renderTopicUsers = () => {
        if (['all', 'users'].includes(topicAttributes.who_can_view)) {
            return renderPostersContainer()
        }
        if (['all', 'users'].includes(topicAttributes.who_can_post)) {
            return renderUsersContainer()
        }
        return <>
            { renderViewersContainer() }
            { renderPostersContainer() }
        </>

    }

    const renderTopicSettings = () => {
        const heading = 'Thread Settings'
        const renderContent = () => <TopicSettings 
            whoCanView={topicAttributes.who_can_view}
            whoCanPost={topicAttributes.who_can_post}
        />
        return <MenuItemContainer
            heading={heading}
            renderContent={renderContent}
        />
    }

    const renderFilter = () => {
        const heading = 'Filter'
        const renderContent = () => <Filter
            users={topicAttributes.posters}
            userFilter={topicDisplay.users} flagFilter={topicDisplay.flags}
            toggleUserFilter={user => dispatch(toggleUserFilter(topicSlug, user))}
            toggleFlagFilter={flag => dispatch(toggleFlagFilter(topicSlug, flag))}
            includeAllUsers={() => dispatch(includeAllUsers(topicSlug))}
            excludeAllUsers={() => dispatch(excludeAllUsers(topicSlug))}
        />
        return <MenuItemContainer
            heading={heading}
            renderContent={renderContent}
        />
    }

    const renderPublished = () => (
        <>
            <PageControlContainer topicDisplay={topicDisplay} page={page} pages={pages} />
            { renderFilter() }
            { topicAttributes.can_post && <Subscribe
                subscribed={subscribed}
                handleSubscribe={handleSubscribe}
                handleUnsubscribe={handleUnsubscribe}
            /> }
            { renderTopicSettings() }
            { renderTopicUsers() }
        </>
    )

    return (
        <>
            {   
                currentUser?.attributes.slug === topicAttributes.user_slug &&
                topicAttributes.status === 'unpublished' &&
                renderOwnerSettings()
            }
            { topicAttributes.status !== 'unpublished' && renderPublished() }
        </>
    )
}

export default AsideRightTopicContainer