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
    return (
        <div className="post-content">
            <div>
                <strong><em>
                    Reply #{tag} on {dateString} 
                </em></strong>
            </div>
            <br />
            {bbCodeParsing.parse(text, bbCodeObjects)}
        </div>
    )
}

export default PostContent