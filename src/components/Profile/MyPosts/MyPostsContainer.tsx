import React from "react";
import {
  addPostActionCreator,
  ChangeNewTextCallbackActionType,
  updateNewPostTextActionCreator
} from "../../../redux/profilePage-reduser";
import {MyPosts} from "./MyPosts";
import store, {StoreType} from "../../../redux/redux-store";
import StoreContext from "../../../StoreContext";

type MyPostsPropsType = {
  //store: StoreType
  // posts: Array<PostsType>
  // newPostText: string
  // dispatch: (action: PostActionTypes) => void

}


export function MyPostsContainer(props: MyPostsPropsType) {
  // let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

  // let state = store.getState();

  // let addPost = () => {
  //   // props.addPost();
  //
  //   store.dispatch(addPostActionCreator())
  // }
  //
  // const onPostChange = (text: string) => {
  //   // props.updateNewPostText = e.currentTarget.value;
  //   let action: ChangeNewTextCallbackActionType = updateNewPostTextActionCreator(text)
  //   store.dispatch(action)
  // }

  return (

    <StoreContext.Consumer>
      { (store) => {
        let state = store.getState();
        let addPost = () => {
          store.dispatch(addPostActionCreator())
        }

        const onPostChange = (text: string) => {
          let action: ChangeNewTextCallbackActionType = updateNewPostTextActionCreator(text)
          store.dispatch(action)
        }

        return <MyPosts
          updateNewPostText={onPostChange}
          addPost={addPost}
          posts={state.profilePage.posts}

          newPostText={state.profilePage.newPostText}
        />
      }
    }
    </StoreContext.Consumer>
  )
}