import React from 'react';
import './App.css';
import Header from "./Component/Haeder/Header"
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";
import Dialog from "./Component/Dialog/Dialog";
import {BrowserRouter, Route} from "react-router-dom";
import News from "./Component/News/News";
import Music from "./Component/Music/Music";
import Settings from "./Component/Settings/Settings";
import {stateType} from "./State/State";

type PropsType = {
    appState: stateType
}

function App(props: PropsType) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header/>
                <Navbar/>
                <div className='App-wrapper-profile'>
                    <Route path={"/profile"} render={() => <Profile posts={props.appState}/>} />
                    <Route path={"/dialogs"} render={() => <Dialog names={props.appState} message={props.appState} />}/>
                    <Route path={"/news"} component={News}/>
                    <Route path={"/music"} component={Music}/>
                    <Route path={"/settings"} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
