import React from 'react'
import UserLink from './UserLink'

const PostInfo = ({ user, avatarUrl }) => {

    const avatarSrc = avatarUrl || require('../../default_avatar.png')

    return (
        <div className="post-info">
            <div><UserLink user={user} /></div>
            <div><img className="avatar" src={avatarSrc} alt="avatar" /></div>
        </div>
    )
}

export default PostInfo