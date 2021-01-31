import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePage-reduser";
import {Redirect, withRouter} from "react-router-dom";
import {RootState} from "../../redux/redux-store";


class ProfileContainer extends React.Component<any, any> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if (!userId) userId = 13767

    this.props.getUserProfile(userId)
  }

  render() {

    if (!this.props.isAuth) return <Redirect to={"/login"}/>

    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)