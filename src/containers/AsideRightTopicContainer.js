import React from 'react'
import { connect } from 'react-redux'

import { subscribeToTopic, unsubscribeToTopic } from '../actions/userTopicsActions'

const AsideRightTopicContainer = ({
    userTopic,
    subscribeToTopic,
}) => {

    const topicId = userTopic && parseInt(userTopic.attributes.topic_id)
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
        <aside className='aside-right'>
            {button}
        </aside>
    )
}

const mapDispatchToProps = dispatch => ({
    subscribeToTopic: (topicId, subscribed) => dispatch(subscribeToTopic(topicId, subscribed))
})

export default connect(null, mapDispatchToProps)(AsideRightTopicContainer)