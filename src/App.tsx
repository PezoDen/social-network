import React from 'react';
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import UserApiComponent from "./components/Users/UserApiComponent";


type StatePropsType = {
  //store: StoreType
  // children:
}

function App(props: StatePropsType) {
  return (
    <div className='app-wrapper'>
      <HeaderContainer/>
      <Navbar/>
      <div className={'app-wrapper-content'}>

        <Route exact={true} path={"/"} render={() => <ProfileContainer/>}/>
        <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
        <Route path={"/users"} render={() => <UserApiComponent/>}/>
        <Route path={"/news"} render={() => <News/>}/>
        <Route path={"/music"} render={() => <Music/>}/>
        <Route path={"/settings"} render={() => <Settings/>}/>
        <Route path={"/login"} render={() => <Login/>}/>
      </div>
    </div>
  );
}

export default App;

