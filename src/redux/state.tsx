import profilePageReducer, {PostActionTypes} from "./profilePage-reduser";
import dialogsPageReducer, {SendActionTypes} from "./dialogsPage-reduser";
import sidebarPageReducer from "./sidebarPage-reduser";

export type PostsType = {
  id: number
  message: string
  likesCount: number

}
export type PostsPageType = {
  posts: Array<PostsType>
  newPostText: string
}
export type SidebarPageType = {}

export type DialogsType = {
  id: number
  name: string
}

export type MessagesType = {
  id: number
  message: string
}

export type MessagePageType = {
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newMessageBody: string
}

export type RootStateType = {
  profilePage: PostsPageType
  messagesPage: MessagePageType
  sidebarPage: SidebarPageType
}


export type StoreType = {
  _state: RootStateType
  _renderEntireThree: () => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void

}

export type ActionsTypes = PostActionTypes | SendActionTypes

const ADD_Post = 'ADD-POST';
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CAllBACK';
const CHANGE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


const store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 25},
        {id: 2, message: 'It\'s my first post !', likesCount: 15},
      ],
      newPostText: "it-kamasutra",
    },
    messagesPage: {
      dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'},

      ],
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
        {id: 6, message: 'Yo'},
      ],
      newMessageBody: ""
    },
    sidebarPage: { },
  },
  _renderEntireThree() {
    console.log("state is changing")
  },

  subscribe(callback) {
    this._renderEntireThree = callback
  },
  getState() {
    return this._state
  },
  dispatch(action) {
    this._state.profilePage = profilePageReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsPageReducer(this._state.messagesPage, action);
    this._state.sidebarPage = sidebarPageReducer(this._state.sidebarPage, action);
        this._renderEntireThree()
    }
}
export default store