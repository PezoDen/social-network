import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reduser";
import {Dialogs} from "./Dialogs";
import store, {StoreType} from "../../redux/redux-store";

type DialogsPropsType = {
  // dispatch: (action: ActionsTypes) => void
  // store: MessagePageType
  store: StoreType

}

export const DialogsContainer = (props: DialogsPropsType) => {

  let state = store.getState().messagesPage

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator())

  }
  let onNewMessageChange = (body: string) => {
    props.store.dispatch(updateNewMessageBodyCreator(body))

  }

  return <Dialogs
    updateNewMessageBody={onNewMessageChange}
    sendMessage={onSendMessageClick}
    dialogsPage={state}/>

}