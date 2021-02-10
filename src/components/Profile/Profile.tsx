import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/entities";


type ProfilePropsType = {
  profile: ProfileType
  status: string
  updateStatus: (status: string) => void

}

export function Profile(props:ProfilePropsType) {


  return (
    <div>
      <ProfileInfo profile={props.profile}
                   status={props.status}
                   updateStatus={props.updateStatus}/>
      <MyPostsContainer/>
    </div>
  )
}