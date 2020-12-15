import React, {ChangeEvent} from "react";
import {PostsType} from "../../../redux/state";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

type MyPostsPropsType = {
  posts: Array<PostsType>
  addPostCallback: (message: string) => void
  changeNewTextCallback: (newText: string) => void
  newPostText: string
}

export function MyPosts(props: MyPostsPropsType) {
  let postsElements = props.posts.map(p => <Post message={p.message} like={p.likesCount}/>)

  let addPost = () => {
    props.addPostCallback(props.newPostText)
  }

  const newTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeNewTextCallback(e.currentTarget.value)
  }

  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={props.newPostText} onChange={newTextChange}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>

        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}