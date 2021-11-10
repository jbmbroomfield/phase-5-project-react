import React from 'react'
import UserLink from './UserLink'

const PostInfo = ({ user, avatarUrl }) => {
    return (
        <div className="post-info">
            <div><UserLink user={user} /></div>
            <div><img className="avatar" src={avatarUrl} alt="avatar" /></div>
        </div>
    )
}

export default PostInfo