import {combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePage-reduser";
import dialogsPageReducer from "./dialogsPage-reduser";
import sidebarPageReducer from "./sidebarPage-reduser";

let reducers = combineReducers({
  profilePage: profilePageReducer,
  messagesPage: dialogsPageReducer,
  sidebarPage: sidebarPageReducer
})
 export type StoreType= typeof store

let store = createStore(reducers)

export default store