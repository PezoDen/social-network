import {ActionsTypes, PostsPageType, ProfileType} from "./store";

// const ADD_Post = 'ADD-POST';
// const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CAllBACK';
// const SET_USER_PROFILE = 'SET-USER-PROFILE'
// export type AddPostActionType = {
//   type: 'ADD-POST'
//   // newPostText: string
// }
// export type ChangeNewTextCallbackActionType = {
//   type: 'CHANGE-NEW-TEXT-CAllBACK'
//   newText: string
//
// }
// export type SetUserProfileActionType = {
//   type: 'SET-USER-PROFILE'
//   profile: null
//
// }


const initialState: PostsPageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 25},
    {id: 2, message: 'It\'s my first post !', likesCount: 15},
  ],
  newPostText: "it-kamasutra",
  profile: {aboutMe: "",
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
    default:
      return state;
  }

}
export type PostActionTypes = ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof updateNewPostTextActionCreator>

export const addPostActionCreator = () => {
  return {type: 'ADD-POST'} as const
}
export const setUserProfile = (profile: ProfileType) => {
  return {type: 'SET-USER-PROFILE', profile} as const
}
export const updateNewPostTextActionCreator = (text: string) => {
  return {
    type: 'CHANGE-NEW-TEXT-CAllBACK', newText: text
  }as const
}
export default profilePageReducer;