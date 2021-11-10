import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = ({ user }) => {

    if (!user) {
        return null
    }

    return (
        <Link to={`/users/${user.id}`}>
            {user.attributes.username}
        </Link>
    )
}

export default UserLink