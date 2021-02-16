import {PostActionTypes} from "./profilePage-reduser";
import {SendActionTypes} from "./dialogsPage-reduser";
import {UserActionType} from "./usersPage-reduser";

export type UserType = {
  id: number
  photos: {
    small: string | null
    large: string | null
  }
  followed: boolean
  name: string
  status: string
  location: {
    city: string
    country: string
  }
}
export type UserStateType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  followingInProgress: number[]
}
export type PostsType = {
  id: number
  message: string
  likesCount: number

}

export type PostsPageType = {
  posts: Array<PostsType>
  // newPostText: string
  status: string
  profile: ProfileType
}
export type AuthType = {
  userId: number
  login: string
  email: string
  isAuth: boolean
}
export type ProfileType = {
  userId: number
  aboutMe: string
  lookingForAJob: boolean
  lookingForAJobDescription: string | null
  fullName: string
  contacts: {
    [key: string]: string | null

    // github: string | null
    // vk: string | null
    // facebook: string | null
    // instagram: string | null
    // twitter: string | null
    // website: string | null
    // youtube: string | null
    // mainLink: string | null
  }
  photos: {
    small: string | null
    large: string | null
  }
}
export type DialogsType = {
  id: number
  name: string
}

export type MessagesType = {
  id: number
  message: string
}


export type ActionsTypes = PostActionTypes | SendActionTypes | UserActionType// }
export type SidebarPageType = {}
export type MessagePageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}