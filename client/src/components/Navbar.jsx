import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const logoutHandler = () => {

    }
    
    return (
        <nav>
            <div className="nav-wrapper">
            <a href="#" className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">Create a nice link</NavLink></li>
                <li><NavLink to="/links">My links</NavLink></li>
                <li><button onClick={logoutHandler}>Log Out</button></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar