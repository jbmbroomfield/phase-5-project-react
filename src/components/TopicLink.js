import React from 'react'
import { Link } from 'react-router-dom'

const TopicLink = ({ 
    topic,
    topicId,
    title,
}) => {
    if (topic) {
        topicId = topic.id
        title = topic.attributes.title
    }
    return (
        <Link to={`/topics/${topicId}`}>
            {title}
        </Link>
    )
}

export default TopicLink