import React from "react";
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderType = {
  isAuth:boolean
  login:string
  userId: number
}

export function Header(props:HeaderType) {

    return (
        <header className={classes.header}>
            <img
                src="https://image.shutterstock.com/image-vector/abstract-logo-minimalistic-design-creative-260nw-382825960.jpg"
                alt=''/>
                <div className={classes.loginBlock}>
                  {props.isAuth ? <NavLink to={'/profile/' + props.userId}>{props.login}</NavLink>
                    :
                  <NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}