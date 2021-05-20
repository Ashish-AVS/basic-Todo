import React from 'react'
import '../App.css';
const NavBar = ({authData}) => {
    return(
        <div className="Navbar">
            <span>Todo List</span>
            <div className="navbar-auth">
            {authData.displayName?
            <span className="auth-name">{"Welcome, " + authData.displayName}</span>:
            <span>Login To continue</span>
            }
            </div>
        </div>
    )
}

export default NavBar