import React from 'react'
import { Link } from 'react-router-dom'

const UserLink = ({ user }) => {

    if (!user || !user.attributes) {
        return null
    }

    const { account_level, username, slug } = user.attributes

    if (account_level === 'guest') {
        return <u>{username}</u>
    }

    return <Link to={`/users/${slug}`}>
        {username}
    </Link>
}

export default UserLink