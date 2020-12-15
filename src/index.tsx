import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state, {addPost, changeNewTextCallback, RootStateType, subscribe} from "./redux/state";


export const renderEntireThree =()=> {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          posts={state.profilePage.posts}
          dialogs={state.messagesPage.dialogs}
          messages={state.messagesPage.messages}
          newPostText={state.profilePage.newPostText}
          addPostCallback={addPost}
          changeNewTextCallback={changeNewTextCallback}
        />
      </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireThree()
subscribe(renderEntireThree)
