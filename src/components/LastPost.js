import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { setScrollId } from '../actions/topicDisplayActions'

import UserLink from './UserLink'
import TopicLink from './TopicLink'

const LastPost = ({
    lastPost, setScrollId, topic
}) => {


    const history = useHistory()

    if (!lastPost) {
        return null
    }

    const attributes = lastPost.attributes

    const goToPost = () => {
        setScrollId(attributes.tag)
        history.push(`/topics/${attributes.topic.id}`)
    }

    const renderGreenArrow = () => (
        <i
            className="fa fa-arrow-right clickable"
            style={{color: 'green'}}
            onClick={goToPost}
        ></i>
    )

    const renderTopic = () => {
        if (!topic) {
            return null
        }
        return <>in <TopicLink topic={topic} /><br /></>
    }

    return (
        <div className="last-post">
            <strong>{attributes.created_at_s}</strong>{renderGreenArrow()}<br />
            { renderTopic() }
            by <UserLink user={attributes.user} />
        </div>
    )
}



const mapDispatchToProps = {
    setScrollId,
}

export default connect(null, mapDispatchToProps)(LastPost)