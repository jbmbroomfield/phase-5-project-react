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

    const userSlug = match.params.userSlug
    const user = useSelector(state => selectUser(state, userSlug))

    if (!user) return null

    const userAttributes = user.attributes

    return (
        <div>
            <h1>{userAttributes.username}</h1>
        </div>
    )
}

export default UserContainer