import React, {ChangeEvent} from "react";
import {PostsType} from "../../../redux/store";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {
  updateNewPostText:(text:string) => void;
  posts: Array<PostsType>
  newPostText: string
  addPost: ()=> void
  // dispatch: (action: PostActionTypes) => void

}


export function MyPosts(props: MyPostsPropsType) {
  let postsElements = props.posts.map((p,i) => <Post key={i} message={p.message} like={p.likesCount} />)

  let onAddPost= () => {
    props.addPost();

    // props.dispatch(addPostActionCreator())
  }

  const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

    props.updateNewPostText(e.currentTarget.value);
    // let action: ChangeNewTextCallbackActionType = updateNewPostTextActionCreator(e.currentTarget.value)
    // props.dispatch(action)
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={props.newPostText} onChange={onPostChange}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>

        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}