import React from "react";

import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/entities";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
  posts: Array<PostsType>
  addPost: (newPostText:string) => void

}


export function MyPosts(props: MyPostsPropsType) {
  let postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} like={p.likesCount}/>)

  let onAddPost = (values:FormDataType) => {
    props.addPost(values.newPostText);
  }
  return (
    <div className={s.postBlock}>
      <h3>My posts</h3>
      <AddNewPostsFormRedux onSubmit={onAddPost}/>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}
type FormDataType = {
  newPostText: string
}
let AddNewPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"textarea"} name={"newPostText"}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
 const AddNewPostsFormRedux = reduxForm<FormDataType>({form:"profileMyPostsForm"})(AddNewPostsForm)