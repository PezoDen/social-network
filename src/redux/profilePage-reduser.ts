import {ActionsTypes, PostsPageType, PostsType, StoreType} from "./state";

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


const profilePageReducer = (state: PostsPageType, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_Post:
      const newPost = {
        id: new Date().getTime(),
        message: state.newPostText, //this._state.profilePage//
        likesCount: 0
      };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;

    case CHANGE_NEW_TEXT_CALLBACK:
      state.newPostText = action.newText
      return state;

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