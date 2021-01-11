import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersPage-reduser";
import {UserStateType, UserType} from "../../redux/entities";
import s from "./Users.module.css"
import  axios from "axios";
import userPhoto from "../../assets/images/ava.jpg"

type MapStatePropsType = {
  users: Array<UserType>
}

type MapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void

}

export const Users = (props: MapStatePropsType & MapDispatchType) => {
    if (props.users.length === 0) {
      axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
        props.setUsers(response.data.items
        )

      })
  }
  return <div>
    {
      props.users.map(u => {
          return (
            <div className={s.users} key={u.id}>
              <span>
                <div>
                  <img className={s.img} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
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

const mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchType => {
  // debugger
  return {
    follow: (userId: number) => {
      // debugger
      dispatch(followAC(userId))
    },
    unfollow: (userId: number) => {
      // debugger
      dispatch(unfollowAC(userId))
    },
    setUsers: (users: Array<UserType>) => {
      dispatch(setUserAC(users))
    }
  }
}

export const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(Users)