import ReactDOM from "react-dom";
import App from "./App";
import state, {addMess, addUser, stateType} from "./State/State";
import React from "react";

export const renderTree = (state: stateType) => {
    ReactDOM.render(
        <App appState={state} addUser={addUser} addMess={addMess}/>,
        document.getElementById('root')
    );
}