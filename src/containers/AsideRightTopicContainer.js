import React, { useState } from 'react'
import { connect } from 'react-redux'

import { subscribeToTopic } from '../actions/userTopicsActions'
import PageControlContainer from './PageControlContainer'
import FilterContainer from './FilterContainer'

const AsideRightTopicContainer = ({
    match,
    userTopics,
    subscribeToTopic,
    topicDisplay,
    topics,
}) => {

    const [displayFilter, setDisplayFilter] = useState(false)

    const toggleDisplayFilter = () => {
        setDisplayFilter(!displayFilter)
    }

    const topicId = match && parseInt(match.params.topicId)
    const topic = topics.find(topic => parseInt(topic.id) === topicId)
    const userTopic = userTopics.find(
        userTopic => parseInt(userTopic.attributes.topic_id) === topicId
    )
    const subscribed = userTopic && userTopic.attributes.subscribed
    const handleSubscribe = () => {
        subscribeToTopic(topicId, true)
    }
    const handleUnsubscribe = () => {
        subscribeToTopic(topicId, false)
    }

    const renderSubscribedStatus = () =>{
        let style, value
        if (subscribed) {
            style = {
                backgroundColor: 'blue'
            }
            value = 'Subscribed'
        } else {
            style = {
                backgroundColor: 'orange'
            }
            value = 'Not Subscribed'
        }
        return (
            <div className="aside-header" style={style}>
                { value }
            </div>
        )
    }

    const renderSubscribeOptions = () => {
        let style, value, handleClick
        if (subscribed) {
            style = {
                backgroundColor: '#f2c65e'
            }
            value = 'Unsubscribe'
            handleClick = handleUnsubscribe
        } else {
            style = {
                backgroundColor: '#849df0'
            }
            value = 'Subscribe'
            handleClick = handleSubscribe
        }
        return ( 
            <div className="aside-header btn" onClick={handleClick} style={style}>
                { value }
            </div>
        )
    }

    return (
        <> 
            <PageControlContainer topicDisplay={topicDisplay} />
            <FilterContainer
                topicDisplay={topicDisplay}
                topic={topic}
                displayFilter={displayFilter}
                toggleDisplayFilter={toggleDisplayFilter}
            />
            { renderSubscribedStatus() }
            { renderSubscribeOptions() }
        </>
    )
}

const mapStateToProps = state => ({
    userTopics: state.userTopics,
    topicDisplay: state.topicDisplay,
    topics: state.topics,
})

const mapDispatchToProps = {
    subscribeToTopic,
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideRightTopicContainer)