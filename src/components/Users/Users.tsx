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
  followingInProgress: number[]
  toggleFollowingProgress: (isFollowing: boolean, userId: number) => void

  // changePage:
}

export const Users = (props: MapStatePropsType) => {
  let pages = []
  for (let i = props.currentPage - 5; i <= props.currentPage + 5 && i < props.pagesCount; i++) {
    if (i < 2) {
      i = 2
    }
    pages.push(i)
  }
  // debugger
  return <div>
    <div>
      <span className={(props.currentPage === 1 ? s.selectedPage : "") + " " + s.cursor}
            onClick={() => {
              props.setCurrentPage(1)
            }}>1 </span>
      {pages[0] !== 2 && <span>...</span>}
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
      {pages[pages.length - 1] !== props.pagesCount - 1 && <span>...</span>}
      <span className={(props.currentPage === props.pagesCount ? s.selectedPage : "") + " " + s.cursor}
            onClick={() => {
              props.setCurrentPage(props.pagesCount)
            }}>{props.pagesCount}</span>
    </div>
    {
      props.users.map(u => {
          const onclickHandler = () => {
            // debugger
            if (u.followed) {
              props.unfollow(u.id)
            } else {
              props.follow(u.id)
            }
          }
          return (
            <div className={s.users} key={u.id}>
              <span>
                <div>
                  <NavLink to={'/profile/' + u.id}>
                    <img alt={""} className={s.img} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                  </NavLink>
                </div>
                <div className={s.buttonCenter}>

                  <button onClick={onclickHandler}
                          className={u.followed ? s.unfollow : s.follow}
                          disabled={props.followingInProgress.some(id => id === u.id)}>
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




