import {addPostActionCreator} from "../../../redux/profilePage-reduser";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootState} from "../../../redux/redux-store";
import {ActionsTypes} from "../../../redux/entities";

let mapStateToProps = (state: RootState) => {
  return {
    posts: state.profilePage.posts,
  }
}
let mapDispatchToProps = (dispatch:(action:ActionsTypes) => void) => {
  return {
    addPost: (newPostText:string) => {
      dispatch(addPostActionCreator(newPostText))
    }

  }
}

const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
