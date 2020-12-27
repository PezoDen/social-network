import {ActionsTypes, MessagePageType} from "./state";

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


const dialogsPageReducer = (state: MessagePageType, action: ActionsTypes) => {

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