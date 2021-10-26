import React, { useState, useEffect } from 'react'
import api from '../api'

import User from '../components/User'

const UsersContainer = props => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        // fetch(api('users'))
        // .then(response => response.json())
        // .then(json => setUsers(json.data))
    })

    return (
        <div>
            { users.map(user => <User username={user.attributes.username} />)}
        </div>
    )
}

export default UsersContainer