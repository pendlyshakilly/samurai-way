import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {stateType} from "./State/State";
import Store from "./State/State";


export const renderTree = () => {
    ReactDOM.render(
        <App appState={Store.getState()} addUser={Store.addUser.bind(Store)} addMess={Store.addMess.bind(Store)} updateNewPostText={Store.updateNewPostText.bind(Store)} updateNewMessText={Store.updateNewMessText.bind(Store)}/>,
        document.getElementById('root')
    );
}

renderTree()
Store.subscriber(renderTree)
