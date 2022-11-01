import ReactDOM from "react-dom";
import App from "./App";
import State, {addMess, addUser, stateType, updateNewMessText, updateNewPostText} from "./State/State";
import React from "react";

export const renderTree = (state: stateType) => {
    ReactDOM.render(
        <App appState={State} addUser={addUser} addMess={addMess} updateNewPostText={updateNewPostText} updateNewMessText={updateNewMessText}/>,
        document.getElementById('root')
    );
}