import React from 'react'
import { useDispatch } from "react-redux";
import { logoutToken } from "../store/tokenSlice";
import { logoutUser } from "../store/userSlice";
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const dispatch = useDispatch()
    const logoutHandler = (event) => {
        event.preventDefault()
        dispatch(logoutToken())
        dispatch(logoutUser())
    }
    
    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem' }}>
            <span className="brand-logo">MY SHORT LINKS</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">Shorten</NavLink></li>
                <li><NavLink to="/links">Links</NavLink></li>
                <li><NavLink to="/" onClick={logoutHandler}>Logout</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar