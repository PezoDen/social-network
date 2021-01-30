import React from "react";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers, toggleFollowingProgress,
  toggleIsFetching,
  unfollow
} from "../../redux/usersPage-reduser";
import {UserType} from "../../redux/entities";
import {Users} from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/api";

type MapStatePropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  pagesCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}

export type MapDispatchType = {
  follow: (userId: number) => void
  unfollow: (userId: number) => void
  setUsers: (users: Array<UserType>) => void
  setCurrentPage: (currentPage: number) => void
  setTotalUsersCount: (totalCount: number) => void
  toggleIsFetching: (isFetching: boolean) => void
  toggleFollowingProgress:(isFollowing:boolean, userId:number)=>void
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


    usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
        this.props.toggleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)

      })
  }

  render(): React.ReactNode {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        pagesCount={this.props.pagesCount}
        users={this.props.users}
        currentPage={this.props.currentPage}
        followingInProgress={this.props.followingInProgress}
        toggleFollowingProgress={this.props.toggleFollowingProgress}
        setCurrentPage={this.changePage}
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
    isFetching: state.usersPage.isFetching,
    followingInProgress:state.usersPage.followingInProgress
  }
}


export const ContainerUser = connect<MapStatePropsType,MapDispatchType,{},RootState>(
  mapStateToProps,
  {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount,
    toggleIsFetching, toggleFollowingProgress})(UserApiComponent)

