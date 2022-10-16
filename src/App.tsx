import React from 'react';
import './App.css';
import Header from "./Component/Haeder/Header"
import Navbar from "./Component/Navbar/Navbar";
import Profile from "./Component/Profile/Profile";


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
