import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

export function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to={'/profile'} activeClassName={s.active} rel="noopener">
                Profile
            </NavLink></div>
            <div className={s.item}>
                <NavLink to={'/dialogs'} activeClassName={s.active} rel="noopener">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.active} rel="noopener">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.active} rel="noopener">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.active} rel="noopener">Settings</NavLink>
            </div>
        </nav>
    )
}