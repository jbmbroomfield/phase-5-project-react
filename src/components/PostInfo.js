import React from 'react'

const PostInfo = ({ username, avatarUrl }) => {
    return (
        <div className="post-info">
            <div>{username}</div>
            <div><img className="avatar" src={avatarUrl} alt="avatar" /></div>
        </div>
    )
}

export default PostInfo