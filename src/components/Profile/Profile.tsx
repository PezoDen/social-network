import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, PostsType} from "../../redux/state";


type ProfilePropsType = {
  posts: Array<PostsType>
  newPostText:string
  dispatch: (action: ActionsTypes) => void

}

export function Profile(props: ProfilePropsType) {


  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={props.posts}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
      />
    </div>
  )
}