import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {ActionsTypes, MessagePageType} from "../../redux/state";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reduser";

type DialogsPropsType = {
  dispatch: (action: ActionsTypes) => void
  store: MessagePageType

}

export const Dialogs = (props: DialogsPropsType) => {

  let dialogsElements = props.store.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = props.store.messages.map(m => <Message message={m.message}/>)
  let newMessagesBody = props.store.newMessageBody
  let onSendMessageClick = () => {
    props.dispatch(sendMessageCreator())


  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value
    props.dispatch(updateNewMessageBodyCreator(body))

  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <div>
          <div><textarea value={newMessagesBody}
                         onChange={onNewMessageChange}
                         placeholder={'Enter your message'}></textarea></div>
          <div>
            <button onClick={onSendMessageClick}>send</button>
          </div>
        </div>
      </div>
    </div>
  )
}