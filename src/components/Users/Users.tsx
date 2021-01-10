import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersPage-reduser";
import {UserStateType, UserType} from "../../redux/entities";
import s from "./Users.module.css"

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
      props.setUsers([
          {
            id: 1,
            photoUrl: 'https://yt3.ggpht.com/a/AATXAJw3czP6Txt6Yf7wrlnhPGdEQ14IEQcA9jg6INLk=s900-c-k-c0xffffffff-no-rj-mo',
            followed: true,
            fullName: 'Dmitry',
            status: 'i am a boss',
            location: {city: 'minsk', country: 'Belarus'}
          },
          {
            id: 2,
            photoUrl: 'https://24smi.org/public/media/resize/800x-/person/2018/07/01/iljalz9bridy-masiania.jpg',
            followed: false,
            fullName: 'Anton',
            status: 'i am a teacher',
            location: {city: 'minsk', country: 'Belarus'}
          }
        ]
      )
  }
  return <div>
    {
      props.users.map(u => {
          return (
            <div className={s.users} key={u.id}>
              <span>
                <div>
                  <img className={s.img} src={u.photoUrl}/>
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
                <div>{u.fullName}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{u.location.country}</div>
                <div>{u.location.city}</div></span>
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