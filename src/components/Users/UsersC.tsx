import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {followAC, setCurrentPageAC, setTotalUsersCountAC, setUserAC, unfollowAC} from "../../redux/usersPage-reduser";
import {UserType} from "../../redux/entities";
import axios from "axios";
import {Users} from "./Users";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  pagesCount: number
  currentPage: number


}

type MapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount:(totalCount: number) => void
}

class UsersC extends React.Component<MapStatePropsType & MapDispatchType> {
  componentDidMount(): void {
    this.changePage(this.props.currentPage)
  }

  changePage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  render(): React.ReactNode {
    return <div>
      <Users {...this.props} setCurrentPage={this.changePage}
      />
    </div>
  }
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pagesCount: Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize),
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber: number) => {
      dispatch(setCurrentPageAC(pageNumber))
    },
    setTotalUsersCount: (totalCount: number) => {
      dispatch(setTotalUsersCountAC(totalCount))
    }
  }
}

export const ContainerUser = connect(mapStateToProps, mapDispatchToProps)(UsersC)






