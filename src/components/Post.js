import React from 'react'
import PostContent from './PostContent'
import PostInfo from './PostInfo'

const Post = ({ text, user }) => {
    return (
        <div className="post">
            <PostInfo username={user && user.attributes.username} />
            <PostContent text={text} />
        </div>
    )
}

export default Post