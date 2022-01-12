import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { updateUserTopic } from 'redux/actions/userTopicsActions'
import { editTopic } from 'redux/actions/topicsActions'
import { addViewer, addPoster } from 'redux/actions/topicsActions'


import PageControlContainer from './PageControlContainer'
import MenuItemContainer from './MenuItemContainer'
import TopicSettings from '../components/TopicSettings'
import Filter from '../components/Filter'
import TopicUsers from '../components/TopicUsers'

import { excludeAllUsers, includeAllUsers, toggleFlagFilter, toggleUserFilter } from 'redux/actions/topicDisplaysActions'

import getTopicDisplay from 'getTopicDisplay'
import WhoCanContainer from './WhoCanContainer'
import SubscribeContainer from './SubscribeContainer'

const AsideRightTopicContainer = () => {

    const dispatch = useDispatch()

    const topicDisplays = useSelector(state => state.topicDisplays)
    const currentUser = useSelector(state => state.currentUser)

    const subsection = useSelector(state => state.currentSubsection)
    const topic = useSelector(state => state.currentTopic)
    const userTopic = useSelector(state => state.currentUserTopic)

    const subsectionAttributes = subsection ? subsection.attributes : {}
    const topicAttributes = topic ? topic.attributes : {}
    const userTopicAttributes = userTopic ? userTopic.attributes : {}

    const subsectionSlug = subsectionAttributes.slug
    const topicSlug = topicAttributes.slug

    const currentUserAttributes = currentUser && currentUser.attributes ? currentUser.attributes : {}

    const topicDisplay = getTopicDisplay(topicDisplays, topicSlug)
    const {page, pages} = topicDisplay

    if (!topic) {
        return null
    }

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
            { currentUserAttributes.slug !== topicAttributes.user_slug && <SubscribeContainer
                status={userTopicAttributes.status}
                updateStatus={status => dispatch(updateUserTopic(subsectionSlug, topicSlug, {status}))}
            /> }
            { renderTopicSettings() }
            { renderTopicUsers() }
        </>
    )

    return <>
        {   
            currentUserAttributes.slug === topicAttributes.user_slug &&
            topicAttributes.status === 'unpublished' &&
            renderOwnerSettings()
        }
        { topicAttributes.status !== 'unpublished' && renderPublished() }
    </>
}

export default AsideRightTopicContainer