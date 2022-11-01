import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state, {addMess, addUser} from "./State/State";



ReactDOM.render(
    <App appState={state} addUser={addUser} addMess={addMess}/>,
  document.getElementById('root')
);
