import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePage-reduser";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {RootState} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type paramsID = {
  userId?: string | undefined;
}
type MapDispatchToProps = {
  getUserProfile: (userId: number) => void
}
type MapStateToPropsType = ReturnType<typeof mapStateToProps>

type PropsType = MapStateToPropsType & RouteComponentProps<paramsID> & MapDispatchToProps

class ProfileContainer extends React.Component<PropsType> {
  componentDidMount(): void {
    let userId = this.props.match.params.userId
    if (!userId) userId = "13767"

    this.props.getUserProfile(+userId)
  }

  render() {

    return (
      <Profile profile={this.props.profile}/>
    )
  }
}


// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToProps = (state: RootState) => ({
  profile: state.profilePage.profile,
})

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default withAuthRedirect(connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent))