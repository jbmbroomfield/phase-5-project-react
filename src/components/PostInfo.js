import React from 'react'
import UserLink from './UserLink'

const PostInfo = ({ username, userId, avatarUrl }) => {
    return (
        <div className="post-info">
            <div><UserLink username={username} userId={userId} /></div>
            <div><img className="avatar" src={avatarUrl} alt="avatar" /></div>
        </div>
    )
}

export default PostInfo