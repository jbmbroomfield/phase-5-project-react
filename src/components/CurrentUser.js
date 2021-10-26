import React, { useState, useEffect } from 'react'
import api from '../api'

const CurrentUser = () => {

    const [currentUser, setCurrentUser] = useState('')
    
    useEffect(() => {
        const jwt = localStorage.getItem('jwt')
        api('current_user', null, undefined, jwt)
        .then(json => {
            json.data && setCurrentUser(json.data.attributes.username)
        })
    })



    return (
        <div>{currentUser ? `Logged in as ${currentUser}` : 'Not logged in'} </div>
    )
}

export default CurrentUser