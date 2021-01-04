import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {MessagePageType} from "../../redux/store";

type DialogsPropsType = {
  // dispatch: (action: ActionsTypes) => void
  // store: MessagePageType
  dialogsPage: MessagePageType
  sendMessage: () => void
  updateNewMessageBody: (body: string) => void

}

export const Dialogs = (props: DialogsPropsType) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
  let messagesElements = state.messages.map(m => <Message message={m.message}/>)
  let newMessagesBody = state.newMessageBody
  let onSendMessageClick = () => {
    props.sendMessage();


  }
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.target.value
    props.updateNewMessageBody(body)

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