import React from "react";
import s from "./Dialogs.module.css";
import {DialogItem} from "./DialogItem/DialogsItem";
import {Message} from "./Message/Message";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MessagePageType} from "../../redux/entities";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

type DialogsPropsType = {
  dialogsPage: MessagePageType
  sendMessage: (NewMessageBody:string) => void
  updateNewMessageBody: (body: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {

  let state = props.dialogsPage

  let dialogsElements = state.dialogs.map((d,i) => <DialogItem  name={d.name} key={d.id} id={d.id}/>)
  let messagesElements = state.messages.map((m,i) => <Message key={i} message={m.message}/>)
  // let newMessagesBody = state.newMessageBody
  let addNewMessage = (values:FormDataType) => {
    props.sendMessage(values.newMessageBody);
  }


  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div>{messagesElements}</div>
        <AddMessageFormRedux onSubmit={addNewMessage}/>
      </div>
    </div>
  )
}
type FormDataType = {
  newMessageBody: string
}
const maxLength100= maxLengthCreator(100)

const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               name={"newMessageBody"}
               placeholder={"Enter your message"}
               validate={[required, maxLength100]}
        />
      </div>
      <div>
        <button >send</button>
      </div>
    </form>
  )
}
const AddMessageFormRedux = reduxForm<FormDataType>({form: "dialogAddMessageForm"})(AddMessageForm)