import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import store, {StoreType} from "../../redux/redux-store";


// type ProfilePropsType = {
//   store: StoreType
  // posts: Array<PostsType>
  // newPostText:string
  // dispatch: (action: ActionsTypes) => void

// }

export function Profile() {


  return (
    <div>
      <ProfileInfo/>
      <MyPostsContainer
        // store={store}
        // posts={props.posts}
        // dispatch={props.dispatch}
        // newPostText={props.newPostText}
      />
    </div>
  )
}