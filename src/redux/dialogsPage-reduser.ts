import {ActionsTypes, MessagePageType} from "./store";

const CHANGE_NEW_MESSAGE_BODY = 'CHANGE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type ChangeNewMessageBodyActionType = {
  type: 'CHANGE-NEW-MESSAGE-BODY'
  body: string
}
export type SendMessageActionType = {
  type: 'SEND-MESSAGE'
}
export type SendActionTypes = ChangeNewMessageBodyActionType | SendMessageActionType

const initialState:MessagePageType = {
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
}



const dialogsPageReducer = (state: MessagePageType = initialState, action: ActionsTypes): MessagePageType => {

  switch (action.type) {
    case CHANGE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body
      return state
    case SEND_MESSAGE:
      let body = state.newMessageBody
      state.newMessageBody = ''
      state.messages.push({id: 6, message: body})

      return state
    default:
      return state;

  }
}
export const sendMessageCreator = (): SendMessageActionType => {
  return {
    type: SEND_MESSAGE
  }
}
export const updateNewMessageBodyCreator = (body: string): ChangeNewMessageBodyActionType => {
  return {
    type: CHANGE_NEW_MESSAGE_BODY, body: body
  }
}

export default dialogsPageReducer