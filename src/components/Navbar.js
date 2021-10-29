import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ currentUser, removeCurrentUser }) => {

    const renderAuthLinks = () => {
        if (currentUser.attributes) {
            return (
                <li><span className="nav-link" onClick={removeCurrentUser}>Logout</span></li>
            )
        } else {
            return (
                <li><NavLink className="nav-link" to="/login">Login</NavLink></li>
            )
        }
    }

    return (
        <div>
            <ul className='navbar'>
                <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                {renderAuthLinks()}
            </ul>
        </div>
    )
}

export default Navbar