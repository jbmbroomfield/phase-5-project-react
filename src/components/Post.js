import React from 'react'
import PostContent from './PostContent'
import PostInfo from './PostInfo'

const Post = ({ text, user, tag, createdAt }) => {
    return (
        <div className="post">
            <PostInfo username={user && user.attributes.username} />
            <PostContent text={text} tag={tag} createdAt={createdAt} />
        </div>
    )
}

export default Post