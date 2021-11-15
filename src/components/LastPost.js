import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'

import { setScrollId } from '../actions/scrollIdActions'

import UserLink from './UserLink'
import TopicLink from './TopicLink'

const LastPost = ({
    lastPost, setScrollId, showTopic, subsections,
}) => {


    const history = useHistory()

    if (!lastPost) {
        return null
    }

    const topic = lastPost.attributes.topic
    const topicSlug = topic.attributes.slug
    const subsectionId = parseInt(topic.attributes.subsection_id)
    const subsection = subsections.find(subsection => parseInt(subsection.id) === subsectionId)
    const subsectionSlug = subsection?.attributes.slug

    const attributes = lastPost.attributes

    const goToPost = () => {
        setScrollId(attributes.tag)
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

    return (
        <div className="last-post">
            <strong>{attributes.created_at_s}</strong>{renderGreenArrow()}<br />
            { renderTopic() }
            by <UserLink user={attributes.user} />
        </div>
    )
}

const mapStateToProps = state => ({
    subsections: state.subsections,
})

const mapDispatchToProps = {
    setScrollId,
}

export default connect(mapStateToProps, mapDispatchToProps)(LastPost)