import React, { useState, useEffect } from 'react'
import api from '../api'
import { connect } from 'react-redux'

const CurrentUser = ({ currentUser }) => {
    console.log(currentUser)
    return (
        <div>{currentUser && currentUser.username ? `Logged in as ${currentUser.username}` : 'Not logged in'} </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

export default connect(mapStateToProps)(CurrentUser)