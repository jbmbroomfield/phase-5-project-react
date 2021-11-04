import React from 'react'
import { connect } from 'react-redux'

const CurrentUser = ({ currentUser }) => {

    const renderCurrentUser = () => {
        if (currentUser.attributes) {
            return `Logged in as ${currentUser.attributes.username}.`
        }
    }

    return (
        <div>{ renderCurrentUser() }</div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(CurrentUser)