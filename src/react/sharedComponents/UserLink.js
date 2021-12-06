import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = ({
    user,
    userId,
    username
}) => {

    if (!user) {
        return null
    }

    if (user.type === 'guest') {
        return <u>{user.attributes.username}</u>
    }

    return (
        <Link to={`/users/${user.id}`}>
            {user.attributes.username}
        </Link>
    )
}

export default UserLink