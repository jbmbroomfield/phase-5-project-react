import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const TopicLink = ({ 
    subsections,
    topics,
    topic,
    topicId,
}) => {
    
    if (!topic) {
        topic = topics.find(topic => parseInt(topic.id) === topicId)
    }
    const subsectionId = parseInt(topic.attributes.subsection_id)
    const subsection = subsections.find(subsection => parseInt(subsection.id) === subsectionId)
    const subsectionSlug = subsection?.attributes.slug
    const topicSlug = topic?.attributes.slug
    const title = topic?.attributes.title

    return (
        <Link to={`/forum/${subsectionSlug}/${topicSlug}`}>
            {title}
        </Link>
    )
}

const mapStateToProps = state => ({
    subsections: state.subsections,
    topics: state.topics,
})

export default connect(mapStateToProps)(TopicLink)