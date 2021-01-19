import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {RootState} from "../../redux/redux-store";
import {setUserProfile} from "../../redux/profilePage-reduser";
import {ProfileType} from "../../redux/store";


class ProfileContainer extends React.Component<any, any>{
  componentDidMount(): void {
    axios.get<ProfileType>(`https://social-network.samuraijs.com/api/1.0//profile/2`)
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
  profile:state.profilePage.profile
})

export default connect (mapStateToProps,{setUserProfile})(ProfileContainer)