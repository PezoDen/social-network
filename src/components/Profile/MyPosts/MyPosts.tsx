import React from "react";

import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {PostsType} from "../../../redux/entities";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

type MyPostsPropsType = {
  posts: Array<PostsType>
  addPost: (newPostText: string) => void

}


export function MyPosts(props: MyPostsPropsType) {
  let postsElements = props.posts.map((p, i) => <Post key={i} message={p.message} like={p.likesCount}/>)

  let onAddPost = (values: FormDataType) => {
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
const maxLength10 = maxLengthCreator(10)
let AddNewPostsForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea}
               placeholder={"Post message"}
               name={"newPostText"}
               validate={[required, maxLength10]}/>
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  )
}
const AddNewPostsFormRedux = reduxForm<FormDataType>({form: "profileMyPostsForm"})(AddNewPostsForm)