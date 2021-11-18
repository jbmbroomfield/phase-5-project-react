import React from 'react'
import topicAccessDescription from '../topicAccessDescription'

const TopicSettings = ({
    whoCanView, whoCanPost
}) => {

    const text = topicAccessDescription(whoCanView, whoCanPost)
    
    return <>
        {text}
    </>
}

export default TopicSettings