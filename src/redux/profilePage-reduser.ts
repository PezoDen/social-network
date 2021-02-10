import {PostsPageType, ProfileType} from "./entities";
import {profileAPI, usersAPI} from "../API/api";
import {ThunkAction} from "redux-thunk";
import {RootState} from "./redux-store";


const initialState: PostsPageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 25},
    {id: 2, message: 'It\'s my first post !', likesCount: 15},
  ],
  newPostText: "it-kamasutra",
  status: "",
  profile: {
    aboutMe: "",
    contacts: {
      facebook: null,
      website: null,
      vk: null,
      twitter: null,
      instagram: null,
      youtube: null,
      github: null,
      mainLink: null
    },
    lookingForAJob: false,
    lookingForAJobDescription: null,
    fullName: "",
    userId: -1,
    photos: {
      small: null,
      large: null
    }
  }
}

const profilePageReducer = (state: PostsPageType = initialState, action: PostActionTypes): PostsPageType => {
  switch (action.type) {
    case 'ADD-POST':
      const newPost = {
        id: new Date().getTime(),
        message: state.newPostText, //this._state.profilePage//
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      };

    case 'CHANGE-NEW-TEXT-CAllBACK': {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    case  'SET-USER-PROFILE': {
      return {
        ...state,
        profile: action.profile
      }
    }
    case  'SET-STATUS': {
      return {
        ...state,
        status: action.status
      }
    }
    default:
      return state;
  }

}
export type PostActionTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof setStatus>
  | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
  return {type: 'ADD-POST'} as const
}
export const setUserProfile = (profile: ProfileType) => {
  return {type: 'SET-USER-PROFILE', profile} as const
}
export const setStatus = (status: string) => {
  return {type: 'SET-STATUS', status} as const
}
export const getUserProfile = (userId: number): ThunkAction<void, RootState, unknown, PostActionTypes> => (dispatch) => {
  usersAPI.getProfile(userId).then(response => {
    dispatch(setUserProfile(response.data))
  })
}
export const getStatus = (userId: number): ThunkAction<void, RootState, unknown, PostActionTypes> => (dispatch) => {
  profileAPI.getStatus(userId).then(response => {
    dispatch(setStatus(response.data))
  })
}
export const updateStatus = (status: string): ThunkAction<void, RootState, unknown, PostActionTypes> => (dispatch) => {
  profileAPI.updateStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}
export const updateNewPostTextActionCreator = (text: string) => {
  return {type: 'CHANGE-NEW-TEXT-CAllBACK', newText: text} as const
}

export default profilePageReducer;