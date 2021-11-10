import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = ({
    user,
    userId,
    username
}) => {

    if (user) {
        userId = user.id
        username = user.attributes.username
    }

    return (
        <Link to={`/users/${userId}`}>
            {username}
        </Link>
    )
}

export default UserLink