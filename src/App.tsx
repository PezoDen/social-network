import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {StoreType} from "./redux/redux-store";


type StatePropsType = {
  store: StoreType
}

function App(props: StatePropsType) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>

        <Route exact={true} path={"/"} render={() => <Profile
          store ={props.store}

          // posts={props.posts}
          // dispatch={props.dispatch}
          // newPostText={props.newPostText}
        />}/>

        <Route path={"/profile"}
               render={() =>
                 <Profile
                   store ={props.store}
                   // posts={props.posts}
                   // dispatch={props.dispatch}
                   // newPostText={props.newPostText}
                 />}/>

        <Route path={"/dialogs"} render={() => <DialogsContainer
          // dialogs={props.dialogs}
          store ={props.store}


          // store = {props.store.messagesPage}
          // dispatch={props.dispatch}
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

