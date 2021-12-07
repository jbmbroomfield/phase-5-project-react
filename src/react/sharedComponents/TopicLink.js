import React from 'react'
import { Link } from 'react-router-dom'

const TopicLink = ({ topic }) => {
    
    if (!topic || !topic.attributes) {
        return null
    }

    const topicAttributes = topic.attributes
    const subsectionSlug = topicAttributes.subsection_slug
    const topicSlug = topicAttributes.slug
    const title = topicAttributes.title

    return <Link to={`/forum/${subsectionSlug}/${topicSlug}`}>
        {title}
    </Link>
}

export default TopicLink