import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import sidebarPageReducer from "./sidebarPage-reduser";
import usersPageReducer from "./usersPage-reduser";
import authReducer from "./auth-reduser";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: dialogsPageReducer,
  sidebarPage: sidebarPageReducer,
  usersPage: usersPageReducer,
  auth: authReducer
})

export type RootState = ReturnType<typeof reducers>


let store = createStore(reducers,applyMiddleware(thunkMiddleware))

export type StoreType = typeof store

export default store