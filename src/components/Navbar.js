import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ currentUser, removeCurrentUser }) => {

    const renderAuthLinks = () => {
        if (currentUser) {
            return (
                <li><a onClick={removeCurrentUser}>Logout</a></li>
            )
        } else {
            return (
                <li><Link to="/login">Login</Link></li>
            )
        }
    }

    return (
        <div>
            <ul className='navbar'>
                <li><Link to="/">Home</Link></li>
                {renderAuthLinks()}
            </ul>
        </div>
    )
}

export default Navbar