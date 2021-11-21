import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const TopicLink = ({ 
    topic,
    topicId,
}) => {

    // const subsections = useSelector(state => state.subsections)
    const topics = useSelector(state => state.topics)
    
    if (!topic) {
        topic = topics.find(topic => parseInt(topic.id) === topicId)
    }
    // const subsectionId = parseInt(topic.attributes.subsection_id)
    // const subsection = subsections.find(subsection => parseInt(subsection.id) === subsectionId)
    const subsectionSlug = topic.attributes.subsection_slug
    const topicSlug = topic?.attributes.slug
    const title = topic?.attributes.title

    return (
        <Link to={`/forum/${subsectionSlug}/${topicSlug}`}>
            {title}
        </Link>
    )
}

export default TopicLink