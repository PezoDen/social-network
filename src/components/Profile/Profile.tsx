import React from "react";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";


type ProfilePropsType = {
  posts: Array<PostsType>
  newPostText:string
  addPostCallback: (message: string) => void
  changeNewTextCallback: (newText: string) => void

}

export function Profile(props: ProfilePropsType) {


  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        posts={props.posts}
        addPostCallback={props.addPostCallback}
        newPostText={props.newPostText}
        changeNewTextCallback={props.changeNewTextCallback}
      />
    </div>
  )
}