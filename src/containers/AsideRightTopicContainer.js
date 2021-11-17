import React, { useState } from 'react'
import { connect } from 'react-redux'

import { subscribeToTopic } from '../actions/userTopicsActions'
import PageControlContainer from './PageControlContainer'
import FilterContainer from './FilterContainer'
import getTopicDisplay from '../getTopicDisplay'
import WhoCanViewContainer from './WhoCanViewContainer'

import Subscribe from '../components/Subscribe'
import WhoCanPostContainer from './WhoCanPostContainer'

import { editTopic } from '../actions/topicsActions'

const AsideRightTopicContainer = ({
    match,
    userTopics,
    subscribeToTopic,
    topicDisplays,
    topics,
    currentUser,
    editTopic,
}) => {

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
        subscribeToTopic(topicId, true)
    }
    const handleUnsubscribe = () => {
        subscribeToTopic(topicId, false)
    }
    const {page, pages} = topicDisplay

    const renderOwnerSettings = () => {
        return (
            <>
                <WhoCanViewContainer
                    whoCanView={topicAttributes.who_can_view}
                    editTopic={attributes => editTopic(subsectionSlug, topicSlug, attributes)}
                />
                <WhoCanPostContainer
                    whoCanView={topicAttributes.who_can_view}
                    whoCanPost={topicAttributes.who_can_post}
                    editTopic={attributes => editTopic(subsectionSlug, topicSlug, attributes)}
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
                toggleDisplayFilter={toggleDisplayFilter} />
            <Subscribe
                subscribed={subscribed}
                handleSubscribe={handleSubscribe}
                handleUnsubscribe={handleUnsubscribe} />
        </>
    )

    return (
        <>
            { currentUser?.attributes.slug === topicAttributes.user_slug && renderOwnerSettings() }
            { topic?.attributes.status === 'published' && renderPublished() }
        </>
    )
}

const mapStateToProps = state => ({
    userTopics: state.userTopics,
    topicDisplays: state.topicDisplays,
    topics: state.topics,
    currentUser: state.currentUser,
})

const mapDispatchToProps = {
    subscribeToTopic,
    editTopic,
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideRightTopicContainer)