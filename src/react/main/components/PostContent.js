import React from 'react'

import parse from 'bbCode/parse.js'

const PostContent = ({ text, tag, createdAt, timezone }) => {

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
        parse(text, timezone)
    )

    return (
        <div className="post-content">
            { renderPostHeader() }
            { renderPostText() }
        </div>
    )
}

export default PostContent