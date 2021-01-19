import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route} from 'react-router-dom';
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {Music} from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {ContainerUser} from "./components/Users/UserApiComponent";
import ProfileContainer from "./components/Profile/ProfileContainer";


type StatePropsType = {
  //store: StoreType
  // children:
}

function App(props: StatePropsType) {
  return (
    <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className={'app-wrapper-content'}>

        <Route exact={true} path={"/"} render={() => <ProfileContainer/>}/>
        <Route path={"/profile"} render={() => <ProfileContainer/>}/>
        <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
        <Route path={"/users"} render={() => <ContainerUser/>}/>
        <Route path={"/news"} render={() => <News/>}/>
        <Route path={"/music"} render={() => <Music/>}/>
        <Route path={"/settings"} render={() => <Settings/>}/>
      </div>
    </div>
  );
}

export default App;

