import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profilePage-reduser";
import {withRouter} from "react-router-dom";
import {RootState} from "../../redux/redux-store";
import {ProfileType} from "../../redux/entities";


class ProfileContainer extends React.Component<any, any> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if (!userId) userId = 13767
    axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
      .then(response => {
        this.props.setUserProfile(response.data)
      })
  }

  render() {
    return (
      <Profile profile={this.props.profile}/>
    )
  }
}

let mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)