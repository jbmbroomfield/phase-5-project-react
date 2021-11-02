import React from 'react'
import { connect } from 'react-redux'

import { subscribeToTopic } from '../actions/userTopicsActions'

const AsideRightTopicContainer = ({
    match,
    userTopics,
    subscribeToTopic,
}) => {
    
    const topicId = match && parseInt(match.params.topicId)    
    const userTopic = userTopics.find(
        userTopic => parseInt(userTopic.attributes.topic_id) === topicId
    )
    const subscribed = userTopic && userTopic.attributes.subscribed
    const handleClick = () => {
        subscribeToTopic(topicId, !subscribed)
    }

    const button = (
        <button onClick={handleClick}>
            { subscribed ? 'Unsubscribe' : 'Subscribe' }
        </button>
    )

    return (
        <>
            {button}
        </>
    )
}

const mapStateToProps = state => ({
    userTopics: state.userTopics
})

const mapDispatchToProps = dispatch => ({
    subscribeToTopic: (topicId, subscribed) => dispatch(subscribeToTopic(topicId, subscribed))
})

export default connect(mapStateToProps, mapDispatchToProps)(AsideRightTopicContainer)