import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = props => {
    return (
        <div>
            <ul className='navbar'>
                <li><Link to="/">Home</Link></li>
            </ul>
        </div>
    )
}

export default Navbar