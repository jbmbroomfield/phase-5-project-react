import React from 'react'
import { useSelector } from 'react-redux'

const CurrentUser = () => {

    currentUser = useSelector(state => state.currentUser)
    const renderCurrentUser = () => {
        if (currentUser.attributes) {
            return `Logged in as ${currentUser.attributes.username}.`
        }
    }

    return (
        <div>{ renderCurrentUser() }</div>
    )
}

export default CurrentUser