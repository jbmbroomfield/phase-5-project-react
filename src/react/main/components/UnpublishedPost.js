import React from 'react'

import topicAccessDescription from 'topicAccessDescription'

const UnpublishedPost = ({
    guestAccess, whoCanView, whoCanPost,
}) => {
    
    console.log(guestAccess, whoCanView, whoCanPost)

    let text

    // if (!guestAccess || !whoCanView || !whoCanPost) {
    //     text = `${guestAccess} - ${whoCanView} - ${whoCanPost}`
    // } else {
        text = <>
            {topicAccessDescription(guestAccess, whoCanView, whoCanPost)}<br /><br />
            Post a reply to publish the thread.
        </>
    // }

    return <div className="post">
        <div className="post-info"></div>
        <div className="post-content">{text}</div>
        <div className="post-notes"></div>
    </div>

}

export default UnpublishedPost