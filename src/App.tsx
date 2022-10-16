import React from 'react';
import './App.css';
import Header from "./Component/Header";
import Navbar from "./Component/Navbar";
import Profile from "./Component/Profile";


function App() {
    return (
        <div className="App-wrapper">
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}

export default App;
