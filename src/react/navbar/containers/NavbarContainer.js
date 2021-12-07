import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router'

import Navbar from '../components/Navbar'

import { logout } from 'redux/actions/currentUserActions'

const NavbarContainer = () => {

	const dispatch = useDispatch()

    const currentUser = useSelector(state => state.currentUser)
    
    const history = useHistory()

    const renderNavbar = () => (
        <Navbar
            currentUser={currentUser}
            logout={() => {
                dispatch(logout())
                history.push("/")
            }}
        />
    )

    return renderNavbar()

}

export default NavbarContainer