import {PostsType} from "./store";

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
}

export type PostsPageType = {
  posts: Array<PostsType>
  newPostText: string
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
    github: string | null
    vk: string | null
    facebook: string | null
    instagram: string | null
    twitter: string | null
    website: string | null
    youtube: string | null
    mainLink: string | null
  }
  photos: {
    small: string | null
    large: string | null
  }
}

