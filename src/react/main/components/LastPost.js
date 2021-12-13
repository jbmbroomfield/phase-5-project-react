import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import { setScrollId } from 'redux/actions/scrollIdActions'

import UserLink from 'react/sharedComponents/UserLink'
import TopicLink from 'react/sharedComponents/TopicLink'

const LastPost = ({
    lastPost, showTopic,
}) => {

	const dispatch = useDispatch()

    const history = useHistory()

    if (!lastPost || !lastPost.attributes) {
        return null
    }

    const lastPostAttributes = lastPost.attributes

    const topic = lastPostAttributes.topic
    const topicAttributes = topic.attributes
    const topicSlug = topicAttributes.slug
    const subsectionSlug = topicAttributes.subsection_slug

    const goToPost = () => {
        dispatch(setScrollId(lastPostAttributes.tag))
        history.push(`/forum/${subsectionSlug}/${topicSlug}`)
    }

    const renderGreenArrow = () => (
        <i
            className="fa fa-arrow-right clickable"
            style={{color: 'green'}}
            onClick={goToPost}
        ></i>
    )

    const renderTopic = () => {
        if (!showTopic) {
            return null
        }
        return <>in <TopicLink topic={topic} /><br /></>
    }

    return <div className="last-post">
        <strong>{lastPostAttributes.created_at_s}</strong>{renderGreenArrow()}<br />
        { renderTopic() }
        by <UserLink user={lastPostAttributes.user} />
    </div>
}

export default LastPost