import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ currentUser, removeCurrentUser }) => {

    const RenderAuthLinks = () => {
        if (currentUser) {
            return (
                <li><span className="nav-link" onClick={removeCurrentUser}>Logout</span></li>
            )
        } else {
            return (
                <>
                    <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                    <li><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
                </>
            )
        }
    }

    const renderNavbar = () => (
        <ul className="navbar">
            <li><NavLink className="nav-link" to="/">Home</NavLink></li>
            <RenderAuthLinks />
        </ul>
    )

    return (
        <div className="navbar">
            { renderNavbar() }
        </div>
    )
}

export default Navbar