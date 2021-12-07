import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ currentUser, logout }) => {

    const RenderAuthLinks = () => {
        if (!currentUser) {
            return null
        }
        if (currentUser.attributes.account_level === 'guest') {
            return <>
                <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
                <li><NavLink className="nav-link" to="/signup">Sign Up</NavLink></li>
                { currentUser.attributes.guest_data && 
                    <li><span className="nav-link" onClick={logout}>Clear Data</span></li>
                }
            </>
        }
        return <li><span className="nav-link" onClick={logout}>Logout</span></li>
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