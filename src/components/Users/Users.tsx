import React from "react";

import {UserType} from "../../redux/entities";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/ava.jpg"
import {NavLink} from "react-router-dom";

type MapStatePropsType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  pagesCount: number
  currentPage: number
  setCurrentPage: (page: number) => void
  // changePage:
}

export const Users = (props: MapStatePropsType) => {
  let pages = []
  for (let i = 1; i <= props.pagesCount; i++) {
    pages.push(i)
  }
  return <div>
    <div>
      {pages.map(p => {
          return <span key={p}
                       className={(props.currentPage === p ? s.selectedPage : "") + " " + s.cursor}
                       onClick={() => {
                         props.setCurrentPage(p)
                       }}>
            {p} </span>
        }
      )
      }
    </div>
    {
      props.users.map(u => {
          return (
            <div className={s.users} key={u.id}>
              <span>
                <div>
                  <NavLink to={'/profile/' + u.id}>
                    <img alt={""} className={s.img} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                  </NavLink>
                </div>
                <div>

                  <button onClick={() => {
                    // debugger
                    u.followed ? props.unfollow(u.id) : props.follow(u.id)
                  }}>
                    {u.followed ? "unfollow" : "follow"}
                  </button>
                </div>
              </span>
              <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div></span>
             </span>
            </div>
          )
        }
      )
    }
  </div>
}

