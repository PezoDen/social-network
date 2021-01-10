import {ActionsTypes, PostsPageType} from "./store";

const ADD_Post = 'ADD-POST';
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CAllBACK';

export type AddPostActionType = {
  type: 'ADD-POST'
  // newPostText: string
}
export type ChangeNewTextCallbackActionType = {
  type: 'CHANGE-NEW-TEXT-CAllBACK'
  newText: string

}
export type PostActionTypes = AddPostActionType | ChangeNewTextCallbackActionType

const initialState: PostsPageType = {
  posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 25},
    {id: 2, message: 'It\'s my first post !', likesCount: 15},
  ],
  newPostText: "it-kamasutra",
}

const profilePageReducer = (state: PostsPageType = initialState, action: ActionsTypes): PostsPageType => {
  switch (action.type) {
    case ADD_Post:
      const newPost = {
        id: new Date().getTime(),
        message: state.newPostText, //this._state.profilePage//
        likesCount: 0
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case CHANGE_NEW_TEXT_CALLBACK: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state;
  }

}
export const addPostActionCreator = (): AddPostActionType => {
  return {
    type: ADD_Post
  }
}
export const updateNewPostTextActionCreator = (text: string): ChangeNewTextCallbackActionType => {
  return {
    type: CHANGE_NEW_TEXT_CALLBACK, newText: text
  }
}
export default profilePageReducer;