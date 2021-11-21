import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { subscribeToTopic } from '../actions/userTopicsActions'
import PageControlContainer from './PageControlContainer'
import FilterContainer from './FilterContainer'
import getTopicDisplay from '../getTopicDisplay'
import WhoCanViewContainer from './WhoCanViewContainer'

import Subscribe from '../components/Subscribe'
import WhoCanPostContainer from './WhoCanPostContainer'

import { editTopic } from '../actions/topicsActions'
import TopicSettingsContainer from './TopicSettingsContainer'
import ViewersContainer from './ViewersContainer'
import PostersContainer from './PostersContainer'

const AsideRightTopicContainer = ({
    match,
}) => {

    const dispatch = useDispatch()

    const userTopics = useSelector(state => state.userTopics)
    const topicDisplays = useSelector(state => state.topicDisplays)
    const topics = useSelector(state => state.topics)
    const currentUser = useSelector(state => state.currentUser)

    const [displayFilter, setDisplayFilter] = useState(false)

    const toggleDisplayFilter = () => {
        setDisplayFilter(!displayFilter)
    }

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

    const renderPublished = () => (
        <>
            <PageControlContainer topicDisplay={topicDisplay} page={page} pages={pages} />
            <FilterContainer
                topicDisplay={topicDisplay}
                topic={topic}
                displayFilter={displayFilter}
                toggleDisplayFilter={toggleDisplayFilter}
            />
            { topicAttributes.can_post && <Subscribe
                subscribed={subscribed}
                handleSubscribe={handleSubscribe}
                handleUnsubscribe={handleUnsubscribe}
            /> }
            <TopicSettingsContainer 
                whoCanView={topicAttributes.who_can_view}
                whoCanPost={topicAttributes.who_can_post}
            />
            { !['all', 'users'].includes(topicAttributes.who_can_view) && 
                <ViewersContainer viewers={topicAttributes.viewers} />
            }
            <PostersContainer posters={topicAttributes.posters} />
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