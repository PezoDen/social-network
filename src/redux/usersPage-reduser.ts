import {UserStateType, UserType} from "./entities";

const initialState: UserStateType = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false
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
    case "TOGGLE IS FETCHING":
      return {
        ...state,
        isFetching: action.isFetching
      }

    default:
      return state;
  }

}
export type UserActionType = ReturnType<typeof followAC>
  | ReturnType<typeof unfollowAC>
  | ReturnType<typeof setUserAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setTotalUsersCountAC>
  | ReturnType<typeof toggleIsFetchingAC>

export const followAC = (userId: number) => {
  return {type: "FOLLOW", userId} as const
}

export const unfollowAC = (userId: number) => {
  return {
    type: "UNFOLLOW",
    userId
  } as const
}
export const setUserAC = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage} as const)
export const setTotalUsersCountAC = (totalUsersCount: number) => ({type: "SET_TOTAL_USERS_COUNT", totalUsersCount} as const)
export const toggleIsFetchingAC = (isFetching: boolean) => ({type: "TOGGLE IS FETCHING", isFetching} as const)

export default usersPageReducer;


