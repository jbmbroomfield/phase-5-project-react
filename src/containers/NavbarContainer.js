import React from 'react'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../actions/currentUserActions'

const NavbarContainer = ({ currentUser, removeCurrentUser }) => {
    return (
        <Navbar
            currentUser={currentUser}
            removeCurrentUser={removeCurrentUser}
        />
    )
}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = ({
    removeCurrentUser
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)