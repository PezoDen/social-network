import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./redux/redux-store";


export const renderEntireThree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          store={store}
        />
      </BrowserRouter>

    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderEntireThree()

store.subscribe( () => {
  renderEntireThree();
})
