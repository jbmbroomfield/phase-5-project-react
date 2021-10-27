import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ({ currentUser, removeCurrentUser }) => {

    const renderAuthLinks = () => {
        if (currentUser) {
            return (
                <li><a href="#" onClick={removeCurrentUser}>Logout</a></li>
            )
        } else {
            return (
                <li><NavLink to="/login">Login</NavLink></li>
            )
        }
    }

    return (
        <div>
            <ul className='navbar'>
                <li><NavLink to="/">Home</NavLink></li>
                {renderAuthLinks()}
            </ul>
        </div>
    )
}

export default Navbar