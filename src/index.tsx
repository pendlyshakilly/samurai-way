import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import {stateType} from "./State/State";
import Store from "./State/State";


export const renderTree = () => {
    ReactDOM.render(
        <App appState={Store.getState()} dispatch={Store.dispatch.bind(Store)}/>,
        document.getElementById('root')
    );
}

renderTree()
Store.subscriber(renderTree)
