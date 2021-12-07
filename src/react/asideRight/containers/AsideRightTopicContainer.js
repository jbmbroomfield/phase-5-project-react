import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { subscribeToTopic } from 'redux/actions/userTopicsActions'
import { editTopic } from 'redux/actions/topicsActions'
import { addViewer, addPoster } from 'redux/actions/topicsActions'


import PageControlContainer from './PageControlContainer'
import Subscribe from '../components/Subscribe'
import MenuItemContainer from './MenuItemContainer'
import TopicSettings from '../components/TopicSettings'
import Filter from '../components/Filter'
import TopicUsers from '../components/TopicUsers'

import { excludeAllUsers, includeAllUsers, toggleFlagFilter, toggleUserFilter } from 'redux/actions/topicDisplaysActions'

import getTopicDisplay from 'getTopicDisplay'
import WhoCanContainer from './WhoCanContainer'

const AsideRightTopicContainer = ({
    match,
}) => {

    const dispatch = useDispatch()

    const userTopics = useSelector(state => state.userTopics)
    const topicDisplays = useSelector(state => state.topicDisplays)
    const topics = useSelector(state => state.topics)
    const currentUser = useSelector(state => state.currentUser)

    const currentUserAttributes = currentUser ? currentUser.attributes : {}

    const subsectionSlug = match.params.subsectionSlug
    const topicSlug = match.params.topicSlug
    const topic = topics.find(topic => {
        return topic.attributes?.slug === topicSlug
    })
    const topicAttributes = topic ? topic.attributes : {}
    const topicDisplay = getTopicDisplay(topicDisplays, topicSlug)
    const userTopic = userTopics.find(
        userTopic => userTopic.attributes.topic_slug === topicSlug
    )
    const subscribed = userTopic && userTopic.attributes.subscribed
    const handleSubscribe = () => {
        dispatch(subscribeToTopic(subsectionSlug, topicSlug, true))
    }
    const handleUnsubscribe = () => {
        dispatch(subscribeToTopic(subsectionSlug, topicSlug, false))
    }
    const {page, pages} = topicDisplay

    const renderOwnerSettings = () => {
        return <>
            <WhoCanContainer
                viewOrPost="View"
                editTopic={attributes => dispatch(editTopic(subsectionSlug, topicSlug, attributes))}
                topic={topic}
            />
            <WhoCanContainer
                viewOrPost="Post"
                whoCanView={topicAttributes.who_can_view}
                whoCanPost={topicAttributes.who_can_post}
                guestAccess={topicAttributes.guest_access}
                editTopic={attributes => dispatch(editTopic(subsectionSlug, topicSlug, attributes))}
                topic={topic}
            />
        </>
    }
    
    const renderUsersContainer = (userType, canAdd) => {
        const heading = `${userType}s`
        const users = topicAttributes[userType === 'Poster' ? 'posters' : 'viewers']
        const action = userType === 'Poster' ? addPoster : addViewer
        canAdd = canAdd && currentUserAttributes.slug === topicAttributes.user_slug
        const handleAdd = canAdd ? userSlug => dispatch(action(subsectionSlug, topicSlug, userSlug)) : () => {}
        const renderContent = () => <TopicUsers
            userType={userType}
            users={users}
            handleAdd={handleAdd}
            canAdd={canAdd}
        />
        return <MenuItemContainer
            heading={heading}
            renderContent={renderContent}
        />
    }

    const renderTopicUsers = () => {

        if (topicAttributes.who_can_view === 'anyone') {
            if (topicAttributes.who_can_post === 'anyone') {
                return renderUsersContainer('Poster', false)
            }
            return renderUsersContainer('Poster', true)
        }
        if (topicAttributes.who_can_post === 'anyone') {
            return renderUsersContainer('User', true)
        }
        return <>
            { renderUsersContainer('Viewer', true) }
            { renderUsersContainer('Poster', true) }
        </>

        // if (['all', 'users'].includes(topicAttributes.who_can_view)) {
        //     return renderUsersContainer('Poster')
        // }
        // if (['all', 'users'].includes(topicAttributes.who_can_post)) {
        //     return renderUsersContainer('User')
        // }
        // return <>
        //     { renderUsersContainer('Viewer') }
        //     { renderUsersContainer('Poster') }
        // </>

    }

    const renderTopicSettings = () => {
        const heading = 'Thread Settings'
        const renderContent = () => <TopicSettings
            guestAccess={topicAttributes.guest_access}
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
            <Subscribe
                subscribed={subscribed}
                handleSubscribe={handleSubscribe}
                handleUnsubscribe={handleUnsubscribe}
            />
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