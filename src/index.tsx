import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import State, {addMess, addUser, stateType, subscriber, updateNewMessText, updateNewPostText} from "./State/State";
import state from "./State/State";


export const renderTree = (state: stateType) => {
    ReactDOM.render(
        <App appState={State} addUser={addUser} addMess={addMess} updateNewPostText={updateNewPostText} updateNewMessText={updateNewMessText}/>,
        document.getElementById('root')
    );
}

renderTree(state)
subscriber(renderTree)
