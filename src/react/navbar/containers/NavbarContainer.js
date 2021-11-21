import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import Navbar from '../components/Navbar'

import { removeCurrentUser } from 'redux/actions/currentUserActions'

const NavbarContainer = () => {

	const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)
    
    const history = useHistory()

    const logout = () => {
        dispatch(removeCurrentUser())
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

export default NavbarContainer