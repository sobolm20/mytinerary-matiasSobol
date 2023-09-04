import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';


const NavBar = () => {
    return(
        <nav className="header-menu">
            <NavLink to="/Home" className="btn btn-outline-info m-1 p-1">Home</NavLink>
            <NavLink to="/Cities" className="btn btn-outline-info m-1 p-1" activeclassname="activo">Cities</NavLink>
            <NavLink to="/Login" className="btn btn-outline-info m-1 p-1" activeclassname="activo">Login</NavLink>    
        </nav>
    )
}

export default NavBar 