import React from 'react'
import { useHistory } from 'react-router'
import Navbar from '../components/Navbar'
import { connect } from 'react-redux'
import { removeCurrentUser } from '../actions/currentUserActions'

const NavbarContainer = ({ currentUser, removeCurrentUser }) => {

    const history = useHistory()

    const logout = () => {
        removeCurrentUser()
        history.push("/")
    }

    const renderNavbar = () => (
        <Navbar
            currentUser={currentUser}
            logout={logout}
        />
    )

    return renderNavbar()

}

const mapStateToProps = state => ({
    currentUser: state.currentUser
})

const mapDispatchToProps = {
    removeCurrentUser
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)