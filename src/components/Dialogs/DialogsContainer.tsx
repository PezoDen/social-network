import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes} from "../../redux/store";
import {RootState} from "../../redux/redux-store";

// type DialogsPropsType = {
//   // dispatch: (action: ActionsTypes) => void
//   // store: MessagePageType
//
// }
// export const DialogsContainer = (props: DialogsPropsType) => {
//
//
//   return <StoreContext.Consumer>
//     {(store) => {
//       // let state = store.getState().messagesPage
//       //
//       let onSendMessageClick = () => {
//         store.dispatch(sendMessageCreator())
//
//       }
//       let onNewMessageChange = (body: string) => {
//         store.dispatch(updateNewMessageBodyCreator(body))
//
//       }
//       return <Dialogs
//         updateNewMessageBody={onNewMessageChange}
//         sendMessage={onSendMessageClick}
//         dialogsPage={store.getState().messagesPage}/>
//     }
//     }
//   </StoreContext.Consumer>
// }
const mapStateToProps = (state: RootState) => {
  return {
    dialogsPage: state.messagesPage

  }
}
const mapDispatchToProps = (dispatch:(action:ActionsTypes) => void) => {
  return {
    updateNewMessageBody: (body:string) => {
      dispatch(updateNewMessageBodyCreator(body))
    },
    sendMessage: () => {
      dispatch(sendMessageCreator())
    }

  }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;
