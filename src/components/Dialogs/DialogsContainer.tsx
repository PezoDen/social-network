import React from "react";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reduser";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsPropsType = {
  // dispatch: (action: ActionsTypes) => void
  // store: MessagePageType

}

export const DialogsContainer = (props: DialogsPropsType) => {


  return <StoreContext.Consumer>
    { (store) => {
      // let state = store.getState().messagesPage
      //
      let onSendMessageClick = () => {
        store.dispatch(sendMessageCreator())

      }
      let onNewMessageChange = (body: string) => {
        store.dispatch(updateNewMessageBodyCreator(body))

      }
          return <Dialogs
        updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendMessageClick}
        dialogsPage={store.getState().messagesPage}/>
    }
  }
  </StoreContext.Consumer>
}