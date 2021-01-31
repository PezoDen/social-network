import React from "react";
import {Header} from "./Header";
import {connect, ConnectedProps} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reduser";
import {RootState} from "../../redux/redux-store";


class HeaderContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    this.props.getAuthUserData()
  }

  render(){
    return <Header login={this.props.login}
                   isAuth={this.props.isAuth}
                   userId={this.props.userId}/>
  }
}
const mapStateToProps = (state:RootState) => ({
  isAuth: state.auth.isAuth,
  login:state.auth.login,
  userId:state.auth.userId
})
const connector =  connect(mapStateToProps,{getAuthUserData})
type PropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)