import React from 'react'

import { bbCodeObjects } from '../textEditor/bbCode/BBCodeObject'
import bbCodeParsing from '../textEditor/bbCode/BBCodeParsing.js'

const PostContent = ({ text, tag, createdAt }) => {
    createdAt = new Date(createdAt)
    const dateOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    }
    const dateString = createdAt.toLocaleDateString("en-US", dateOptions)

    const RenderPostHeader = () => (
        <>
            <div>
                <strong><em>
                    Reply #{tag} on {dateString} 
                </em></strong>
            </div>
            <br />
        </>
    )

    const RenderPostText = () => (
        bbCodeParsing.parse(text, bbCodeObjects)
    )

    return (
        <div className="post-content">
            <RenderPostHeader />
            <RenderPostText />
        </div>
    )
}

export default PostContent