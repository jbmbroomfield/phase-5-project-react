import React from 'react'
import { useSelector } from 'react-redux'

import User from '../components/User'

const UsersContainer = () => {

    const users = useSelector(state => state.users)

    const renderUsers = () => (
        users.map(user => <User key={user.id} username={user.attributes.username} />)
    )
    return (
        <div>
            { renderUsers() }
        </div>
    )
}

export default UsersContainer