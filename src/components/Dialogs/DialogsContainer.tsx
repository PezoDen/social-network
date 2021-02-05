import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogsPage-reduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {ActionsTypes} from "../../redux/store";
import {RootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const mapStateToProps = (state: RootState) => {
  return {
    dialogsPage: state.messagesPage,
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



const DialogsContainer = (connect(mapStateToProps,mapDispatchToProps)(withAuthRedirect(Dialogs)))

export default DialogsContainer;
