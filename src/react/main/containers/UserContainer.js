import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectUser = createSelector(
    state => state.users,
    (_, userSlug) => userSlug,
    (users, userSlug) => users.find(user => user.attributes.slug === userSlug)
)

const UserContainer = ({
    match,
}) => {

    const { userSlug } = match.params
    const user = useSelector(state => selectUser(state, userSlug))

    if (!user || !user.attributes) {
        return null
    }

    const { username } = user.attributes
    const avatarSrc = user.attributes.get_avatar_image || require('default_avatar.png')

    return <div>
        <h1>{username}</h1>
        <div><img className="avatar-profile" src={avatarSrc} alt="avatar" /></div>
    </div>
}

export default UserContainer