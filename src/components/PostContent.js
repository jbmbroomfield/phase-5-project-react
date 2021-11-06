import React from 'react'

import { bbCodeObjects } from '../textEditor/bbCode/BBCodeObject'
import bbCodeParsing from '../textEditor/bbCode/BBCodeParsing.js'

const PostContent = ({ text, tag, createdAt }) => {
    // createdAt = new Date(createdAt)
    // const dateOptions = {
    //     weekday: 'long',
    //     year: 'numeric',
    //     month: 'long',
    //     day: 'numeric',
    //     hour: 'numeric',
    //     minute: 'numeric',
    //     second: 'numeric',
    // }
    // const dateString = createdAt.toLocaleDateString("en-US", dateOptions)

    const renderPostHeader = () => (
        <>
            <div>
                <strong><em>
                    Reply #{tag} on {createdAt} 
                </em></strong>
            </div>
            <br />
        </>
    )

    const renderPostText = () => (
        bbCodeParsing.parse(text, bbCodeObjects)
    )

    return (
        <div className="post-content">
            { renderPostHeader() }
            { renderPostText() }
        </div>
    )
}

export default PostContent