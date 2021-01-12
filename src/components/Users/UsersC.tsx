import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {followAC, setUserAC, unfollowAC} from "../../redux/usersPage-reduser";
import {UserType} from "../../redux/entities";
import axios from "axios";
import {Users} from "./Users";

type MapStatePropsType = {
  users: Array<UserType>
}

type MapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void

}

class UsersC extends React.Component<MapStatePropsType & MapDispatchType> {
  componentDidMount(): void {
    axios.get("https://social-network.samuraijs.com/api/1.0/users")
      .then(response => {
        this.props.setUsers(response.data.items)
      })

  }

  //  getUsers = () => {
  //
  // }

  render(): React.ReactNode {
    return <div>
      <Users {...this.props}
             // getUsers = {this.getUsers}
      />
    </div>
  }
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

export const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(UsersC)






