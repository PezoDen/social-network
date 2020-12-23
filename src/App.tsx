import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import  {ActionsTypes, DialogsType, MessagesType, PostsType, RootStateType} from "./redux/state";


type StatePropsType = {
  store: RootStateType
  posts: Array<PostsType>
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newPostText: string
  dispatch: (action: ActionsTypes) => void
}

function App(props: StatePropsType) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>

        <Route exact={true} path={"/"} render={() => <Profile
          posts={props.posts}
          dispatch={props.dispatch}
          newPostText={props.newPostText}
        />}/>

        <Route path={"/profile"}
               render={() =>
                 <Profile
                   posts={props.posts}
                   dispatch={props.dispatch}
                   newPostText={props.newPostText}
                 />}/>

        <Route path={"/dialogs"} render={() => <Dialogs
          // dialogs={props.dialogs}
          store = {props.store.messagesPage}
          dispatch={props.dispatch}
          // messages={props.messages}
        />}/>
        <Route path={"/news"} render={() => <News/>}/>
        <Route path={"/music"} render={() => <Music/>}/>
        <Route path={"/settings"} render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;

