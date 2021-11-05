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
    const handleSubscribe = () => {
        console.log('subscribing')
        subscribeToTopic(topicId, true)
    }
    const handleUnsubscribe = () => {
        console.log('unssubscribing')
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
            value = 'Unubscribed'
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
                { subscribed ? 'Unsubscribe' : 'Subscribe' }
            </div>
        )
    }

    return (
        <> 
            { renderSubscribedStatus() }
            { renderSubscribeOptions() }
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