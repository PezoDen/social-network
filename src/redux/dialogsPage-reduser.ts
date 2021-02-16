const SEND_MESSAGE = 'SEND-MESSAGE';

export type SendMessageActionType = {
  type: 'SEND-MESSAGE',
  newMessageBody: string
}
export type SendActionTypes = SendMessageActionType

const initialState = {
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
}


const dialogsPageReducer = (state = initialState, action: SendActionTypes) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody
      return  {
        ...state,
        messages: [...state.messages, {id: 6, message: body}]
      }

    default:
      return state;

  }
}
export const sendMessageCreator = (newMessageBody:string): SendMessageActionType => {
  return {
    type: SEND_MESSAGE,
    newMessageBody:newMessageBody
  }
}

export default dialogsPageReducer