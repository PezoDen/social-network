import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/store";


export const renderEntireThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          posts={store._state.profilePage.posts}
          dialogs={store._state.messagesPage.dialogs}
          messages={store._state.messagesPage.messages}
          newPostText={store._state.profilePage.newPostText}
          dispatch={store.dispatch.bind(store)}
          store={store.getState()}
        />
      </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireThree()
store.subscribe(renderEntireThree)
