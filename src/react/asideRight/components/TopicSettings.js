import React from 'react'
import topicAccessDescription from 'topicAccessDescription'

const TopicSettings = ({
    guestAccess, whoCanView, whoCanPost
}) => {

    const text = topicAccessDescription(guestAccess, whoCanView, whoCanPost)
    
    return <>
        {text}
    </>
}

export default TopicSettings