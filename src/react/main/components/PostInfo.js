import React from 'react'
import UserLink from 'react/sharedComponents/UserLink'

const PostInfo = ({ user, avatarUrl, guestName }) => {

    const avatarSrc = avatarUrl || require('default_avatar.png')

    return (
        <div className="post-info">
            <div>{ user ? <UserLink user={user} /> : <u>{guestName}</u> }</div>
            <div><img className="avatar" src={avatarSrc} alt="avatar" /></div>
        </div>
    )
}

export default PostInfo