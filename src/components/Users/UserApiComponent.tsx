import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {ActionsTypes} from "../../redux/store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggleIsFetching,
  unfollow
} from "../../redux/usersPage-reduser";
import {UserType} from "../../redux/entities";
import axios from "axios";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  pagesCount: number
  currentPage: number
  isFetching: boolean


}

type MapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

class UserApiComponent extends React.Component<MapStatePropsType & MapDispatchType> {
  componentDidMount(): void {
    this.props.toggleIsFetching(true)
    this.changePage(this.props.currentPage)
    this.props.toggleIsFetching(false)
  }

  changePage = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)

      })
  }

  render(): React.ReactNode {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users {...this.props} setCurrentPage={this.changePage}
      />
    </>
  }
}

const mapStateToProps = (state: RootState): MapStatePropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    pagesCount: Math.ceil(state.usersPage.totalUsersCount / state.usersPage.pageSize),
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
  }
}

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
//     },
//     setCurrentPage: (pageNumber: number) => {
//       dispatch(setCurrentPageAC(pageNumber))
//     },
//     setTotalUsersCount: (totalCount: number) => {
//       dispatch(setTotalUsersCountAC(totalCount))
//     },
//     toggleIsFetching: (isFetching: boolean) => {
//       dispatch(toggleIsFetchingAC(isFetching))
//     }
//   }
// }

export const ContainerUser = connect(
  mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching})(UserApiComponent)






