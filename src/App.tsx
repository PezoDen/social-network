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
import {DialogsType, MessagesType, PostsType} from "./redux/state";

type StatePropsType = {
  posts: Array<PostsType>
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  newPostText: string
  addPostCallback: (message: string) => void
  changeNewTextCallback: (newText: string) => void

}

function App(props: StatePropsType) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>

        <Route exact={true} path={"/"} render={() => <Profile
          posts={props.posts}
          addPostCallback={props.addPostCallback}
          newPostText={props.newPostText}
          changeNewTextCallback={props.changeNewTextCallback}


        />}/>

        <Route path={"/profile"}
               render={() =>
                 <Profile
                   posts={props.posts}
                   addPostCallback={props.addPostCallback}
                   newPostText={props.newPostText}
                   changeNewTextCallback={props.changeNewTextCallback}


                 />}/>

        <Route path={"/dialogs"} render={() => <Dialogs
          dialogs={props.dialogs}
          messages={props.messages}
        />}/>
        <Route path={"/news"} render={() => <News/>}/>
        <Route path={"/music"} render={() => <Music/>}/>
        <Route path={"/settings"} render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;

