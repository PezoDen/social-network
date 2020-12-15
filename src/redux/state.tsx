let renderEntireThree = () => {
  console.log("state is changing")
}
export const subscribe = (callback: ()=>void) => {
  renderEntireThree=callback
}

export type PostsType = {
  id: number
  message: string
  likesCount: number

}
export type PostsPageType = {
  posts: Array<PostsType>
  newPostText:string

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

let state: RootStateType = {
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
      {id: 7, name: 'Vasia'},
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
}


export const addPost = (postText: string) => {
  const newPost: PostsType = {
    id: new Date().getTime(),
    message: state.profilePage.newPostText,
    likesCount: 0
  }
  state.profilePage.posts.push(newPost)
  state.profilePage.newPostText=''
  renderEntireThree()
}
export const changeNewTextCallback = (newText:string) => {
state.profilePage.newPostText=newText
  renderEntireThree()
}

export default state