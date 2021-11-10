import React from 'react'
import { Link } from 'react-router-dom'

const TopicLink = ({ topic }) => {
    if (!topic) {
        return null
    }
    return (
        <Link to={`/topics/${topic.id}`}>
            {topic.attributes.title}
        </Link>
    )
}

export default TopicLink