import {UserStateType, UserType} from "./entities";
import {usersAPI} from "../API/api";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";

const initialState: UserStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
}

const usersPageReducer = (state = initialState, action: UserActionType): UserStateType => {
  switch (action.type) {
    case "FOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true}
          }

          return u
        })
      }
    case "UNFOLLOW":
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false}
          }
          return u
        })
      }
    case "SET_USERS":
      return {
        ...state,
        users: [...action.users]
      }
    case "SET_CURRENT_PAGE":
      return {
        ...state,
        currentPage: action.currentPage
      }
    case "SET_TOTAL_USERS_COUNT":
      return {
        ...state,
        totalUsersCount: action.totalUsersCount
      }
    case "TOGGLE_IS_FETCHING":
      return {
        ...state,
        isFetching: action.isFetching
      }
    case "TOGGLE_IS_FOLLOWING_PROGRESS":
      return {
        ...state,
        followingInProgress: action.isFollowing
          ? [...state.followingInProgress,action.userId]
          : state.followingInProgress.filter(id => id !== action.userId)
      }

    default:
      return state;
  }

}
export type UserActionType = ReturnType<typeof followSuccess>
  | ReturnType<typeof unfollowSuccess>
  | ReturnType<typeof setUsers>
  | ReturnType<typeof setCurrentPage>
  | ReturnType<typeof setTotalUsersCount>
  | ReturnType<typeof toggleIsFetching>
  | ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => {return {type: "FOLLOW", userId} as const}
export const unfollowSuccess = (userId: number) => {return {type: "UNFOLLOW", userId} as const}
export const setUsers = (
  users: Array<UserType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPage = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCount =
  (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const)
export const toggleIsFetching = (isFetching: boolean) => ({type: "TOGGLE_IS_FETCHING", isFetching} as const)
export const toggleFollowingProgress = (isFollowing: boolean, userId:number) => ({type: "TOGGLE_IS_FOLLOWING_PROGRESS", isFollowing, userId} as const)

export const getUsersThunkCreator = (pageNumber:number,pageSize:number=5):ThunkAction<void, RootState, unknown, UserActionType> => {
  return (dispatch) => {

    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(pageNumber))

    usersAPI.getUsers(pageNumber, pageSize).then(data => {
      dispatch(toggleIsFetching(false))
      dispatch(setUsers(data.items))
      dispatch(setTotalUsersCount(data.totalCount))
    })
  }
}
export const follow = (userId:number) :ThunkAction<void, RootState, unknown, UserActionType>=> {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId))
    usersAPI.follow(userId)
      .then(response => {
        // debugger
        if (response.data.resultCode === 0) {
          dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false,userId))
      })

  }
}
export const unfollow = (userId:number) :ThunkAction<void, RootState, unknown, UserActionType>=> {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true,userId))
    usersAPI.unfollow(userId)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false,userId))
      })

  }
}

export default usersPageReducer;


