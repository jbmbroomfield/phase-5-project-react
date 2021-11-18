import React from 'react'

import topicAccessDescription from '../topicAccessDescription'

const UnpublishedPost = ({
    whoCanView, whoCanPost,
}) => {
    
    const text = <>
        {topicAccessDescription(whoCanView, whoCanPost)}<br /><br />
        Post a reply to publish the thread.
    </>

    return <div className="post">
        <div className="post-info"></div>
        <div className="post-content">{text}</div>
        <div className="post-notes"></div>
    </div>

}

export default UnpublishedPost