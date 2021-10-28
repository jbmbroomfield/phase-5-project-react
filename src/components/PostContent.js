import React from 'react'

import { bbCodeObjects } from '../textEditor/bbCode/BBCodeObject'
import bbCodeParsing from '../textEditor/bbCode/BBCodeParsing.js'

const PostContent = ({ text }) => {
    return (
        <div className="post-content">
            {bbCodeParsing.parse(text, bbCodeObjects)}
        </div>
    )
}

export default PostContent