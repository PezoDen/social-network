import {sendMessageCreator} from "../../redux/dialogsPage-reduser";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {ComponentType} from "react";
import {ActionsTypes} from "../../redux/entities";

const mapStateToProps = (state: RootState) => {
  return {
    dialogsPage: state.messagesPage,
  }
}
const mapDispatchToProps = (dispatch:(action:ActionsTypes) => void) => {
  return {
    sendMessage: (NewMessageBody:string) => {
      dispatch(sendMessageCreator(NewMessageBody))
    }

  }
}


export default compose<ComponentType>(
  connect(mapStateToProps,mapDispatchToProps),
withAuthRedirect)(Dialogs)


