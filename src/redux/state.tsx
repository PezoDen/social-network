export type PostsType = {
  id: number
  message: string
  likesCount: number

}
export type PostsPageType = {
  posts: Array<PostsType>
  newPostText: string

}
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
}

export type RootStateType = {
  profilePage: PostsPageType
  messagesPage: MessagePageType
}


export type StoreType = {
  _state: RootStateType
  _renderEntireThree: () => void
  subscribe: (callback: () => void) => void
  getState: () => RootStateType
  dispatch: (action: ActionsTypes) => void

}
export type AddPostActionType = {
  type: 'ADD-POST'
  // newPostText: string
}
export type ChangeNewTextCallbackActionType = {
  type: 'CHANGE-NEW-TEXT-CAllBACK'
  newText: string
}
export type ActionsTypes = AddPostActionType | ChangeNewTextCallbackActionType

const ADD_Post = 'ADD-POST';
const CHANGE_NEW_TEXT_CALLBACK = 'CHANGE-NEW-TEXT-CAllBACK';



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
      ]
    }
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
    if (action.type === ADD_Post) {
      const newPost: PostsType = {
        id: new Date().getTime(),
        message: this._state.profilePage.newPostText, //this._state.profilePage//
        likesCount: 0
      }
      this._state.profilePage.posts.push(newPost)
      this._state.profilePage.newPostText = ''
      this._renderEntireThree()
    } else if (action.type === CHANGE_NEW_TEXT_CALLBACK) {
      this._state.profilePage.newPostText = action.newText
      this._renderEntireThree()
    }

  }

}
export const addPostActionCreator = () :AddPostActionType=> {
  return {
    type: ADD_Post
  }
}
export const updateNewPostTextActionCreator = (text:string):ChangeNewTextCallbackActionType => {
  return {
    type: CHANGE_NEW_TEXT_CALLBACK, newText:text
  }
}
export default store