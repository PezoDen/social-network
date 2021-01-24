import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/entities";


type ProfilePropsType = {
  profile: ProfileType
  // store: StoreType
  // posts: Array<PostsType>
  // newPostText:string
  // dispatch: (action: ActionsTypes) => void

}

export function Profile(props:ProfilePropsType) {


  return (
    <div>
      <ProfileInfo profile={props.profile}/>
      <MyPostsContainer
        // store={store}
        // posts={props.posts}
        // dispatch={props.dispatch}
        // newPostText={props.newPostText}
      />
    </div>
  )
}