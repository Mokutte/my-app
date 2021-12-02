import React from "react";
import { NavLink } from "react-router-dom";
import s from './Nav.module.css'

const Nav = () => {
    return <nav className={s.nav}>
    <NavLink to="/profile">Profile</NavLink>
    <NavLink to="/dialogs">Message</NavLink>
    <a>News</a>
    <a>Music</a>
    <a>Settings</a>
   </nav>
}

export default Nav;