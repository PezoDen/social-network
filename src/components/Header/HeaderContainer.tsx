import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect, ConnectedProps} from "react-redux";
import {SetAuthUserData} from "../../redux/auth-reduser";
import {RootState} from "../../redux/redux-store";


class HeaderContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
      withCredentials:true
    })
      .then(response => {

        if (response.data.resultCode === 0) {
          let {id, email, login} = response.data.data
          this.props.SetAuthUserData(id,email,login)
        }
      })
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
const connector =  connect(mapStateToProps,{SetAuthUserData})
type PropsType = ConnectedProps<typeof connector>

export default connector(HeaderContainer)