import React from "react";
import {UserType} from "../../redux/entities";
import s from "./Users.module.css"
import userPhoto from "../../assets/images/ava.jpg"

type MapStatePropsType = {
  users: Array<UserType>
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  // setUsers: (users: Array<UserType>) => void
  // getUsers: () => void

}

export const Users = (props: MapStatePropsType) => {
//   let getUsers = () => {
//     if(props.users.length === 0
// )
//   {
//     axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//       props.setUsers(response.data.items
//       )
//
//     })
//   }
// }
  return <div>
    {/*<button onClick={props.getUsers}> Get Users</button>*/}
    {
      props.users.map(u => {
          return (
            <div className={s.users} key={u.id}>
              <span>
                <div>
                  <img alt={""} className={s.img} src={u.photos.small !== null ? u.photos.small : userPhoto}/>
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

// const mapStateToProps = (state: RootState): MapStatePropsType => {
//   return {
//     users: state.usersPage.users
//   }
// }
//
// const mapDispatchToProps = (dispatch: (action: ActionsTypes) => void): MapDispatchType => {
//   // debugger
//   return {
//     follow: (userId: number) => {
//       // debugger
//       dispatch(followAC(userId))
//     },
//     unfollow: (userId: number) => {
//       // debugger
//       dispatch(unfollowAC(userId))
//     },
//     setUsers: (users: Array<UserType>) => {
//       dispatch(setUserAC(users))
//     }
//   }
// }

// export const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(Users)