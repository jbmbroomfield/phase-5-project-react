import React, { useState, useEffect } from 'react'
import api from '../api'
import { connect } from 'react-redux'

const CurrentUser = ({ currentUser }) => {

    const renderCurrentUser = () => {
        if (currentUser.username) {
            return `Logged in as ${currentUser.username}.`
        }
        if (currentUser.requesting) {
            return 'Fetching current user.'
        }
        return 'Not logged in.'
    }

    return (
        <div>{renderCurrentUser()}</div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(CurrentUser)