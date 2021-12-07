import React from 'react'
import UserLink from 'react/sharedComponents/UserLink'

const PostInfo = ({ user, avatarUrl, guestName }) => {

    const avatarSrc = avatarUrl || require('default_avatar.png')

    return (
        <div className="post-info">
            <div>{ !user || user.attributes.account_level === 'guest' ? <u>{guestName}</u> : <UserLink user={user} /> }</div>
            <div><img className="avatar" src={avatarSrc} alt="avatar" /></div>
        </div>
    )
}

export default PostInfo