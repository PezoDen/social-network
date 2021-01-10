import {UserStateType, UserType} from "./entities";
import {execSync} from "child_process";

// const FOLLOW = 'FOLLOW';
// const UNFOLLOW = 'UNFOLLOW';


const initialState: UserStateType = {
  users: [
    // {id: 1, photoUrl: 'https://yt3.ggpht.com/a/AATXAJw3czP6Txt6Yf7wrlnhPGdEQ14IEQcA9jg6INLk=s900-c-k-c0xffffffff-no-rj-mo',followed: true, fullName: 'Dmitry', status: 'i am a boss', location: {city: 'minsk', country: 'Belarus'}},
    // {
    //   id: 2,
    //   photoUrl:'https://24smi.org/public/media/resize/800x-/person/2018/07/01/iljalz9bridy-masiania.jpg',
    //   followed: false,
    //   fullName: 'Anton',
    //   status: 'i am a teacher',
    //   location: {city: 'minsk', country: 'Belarus'}
    // },
    // {
    //   id: 3,
    //   followed: true,
    //   fullName: 'Andrew',
    //   status: 'i am a schoolboy',
    //   location: {city: 'minsk', country: 'Belarus'}
    // },
    // {
    //   id: 4,
    //   followed: false,
    //   fullName: 'Den',
    //   status: 'i am a schoolboy',
    //   location: {city: 'moskow', country: 'Russia'}
    // },
  ]
}

const usersPageReducer = (state = initialState, action: UserActionType): UserStateType => {
 // debugger
  // tehnical type after start app
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

    default:
      return state;
  }

}
export type UserActionType = ReturnType<typeof followAC> | ReturnType<typeof unfollowAC> |ReturnType<typeof setUserAC>

export const followAC = (userId: number) => {

  return {type: "FOLLOW", userId}as const
   }

export const unfollowAC = (userId: number) => {
  
  return {
    type: "UNFOLLOW",
    userId
  } as const
}
export const setUserAC = (users: Array<UserType>) => ({type: "SET_USERS", users} as const)

export default usersPageReducer;


