import React, { useState } from 'react'
import { connect } from 'react-redux'

import { subscribeToTopic } from '../actions/userTopicsActions'
import PageControlContainer from './PageControlContainer'
import FilterContainer from './FilterContainer'
import getTopicDisplay from '../getTopicDisplay'

import Subscribe from '../components/Subscribe'

const AsideRightTopicContainer = ({
    match,
    userTopics,
    subscribeToTopic,
    topicDisplays,
    topics,
}) => {

    const [displayFilter, setDisplayFilter] = useState(false)

    const toggleDisplayFilter = () => {
        setDisplayFilter(!displayFilter)
    }

    // const subsectionSlug = match.params.subsectionSlug
    const topicSlug = match.params.topicSlug
    const topic = topics.find(topic => {
        return topic.attributes?.slug === topicSlug
    })
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

    return (
        <> 
            <PageControlContainer topicDisplay={topicDisplay} page={page} pages={pages} />
            <FilterContainer
                topicDisplay={topicDisplay}
                topic={topic}
                displayFilter={displayFilter}
                toggleDisplayFilter={toggleDisplayFilter}
            />
            <Subscribe
                subscribed={subscribed}
                handleSubscribe={handleSubscribe}
                handleUnsubscribe={handleUnsubscribe}
            />
        </>
    )
}

const mapStateToProps = state => ({
    userTopics: state.userTopics,
    topicDisplays: state.topicDisplays,
    topics: state.topics,
})

const mapDispatchToProps = {
    subscribeToTopic,
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideRightTopicContainer)