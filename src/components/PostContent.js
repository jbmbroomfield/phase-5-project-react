import React from 'react'

import parse from '../textEditor/bbCode/parse.js'

const PostContent = ({ text, tag, createdAt }) => {

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
        parse(text)
    )

    return (
        <div className="post-content">
            { renderPostHeader() }
            { renderPostText() }
        </div>
    )
}

export default PostContent