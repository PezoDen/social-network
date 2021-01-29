import React from "react";

import {UserType} from "../../redux/entities";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/ava.jpg"
import {NavLink} from "react-router-dom";
import axios from "axios";

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
            u.followed
              ?
              axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                withCredentials: true,
                headers: {
                  "API-KEY": "743b3333-0516-4a4e-806b-b8ecd2b160d7"
                }
              })
                .then(response => {
                  if (response.data.resultCode === 0) {
                    props.unfollow(u.id)
                  }
                })

              :
              axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                withCredentials: true,
                headers: {
                  "API-KEY": "743b3333-0516-4a4e-806b-b8ecd2b160d7"
                }
              })
                .then(response => {
                  // debugger
                  if (response.data.resultCode === 0) {
                    props.follow(u.id)
                  }
                })

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

                  <button onClick={onclickHandler} className={u.followed ? s.unfollow : s.follow }>
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




