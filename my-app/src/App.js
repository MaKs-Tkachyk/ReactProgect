import React from 'react';
import './App.css';
import Dialogs from './сomponents/Dialogs/Dialogs';
import Header from './сomponents/Header/Header';
import NavBar from './сomponents/NavBar/NavBar';
import Profile from './сomponents/Profile/Profile';

const App = () => {
    return (
        <div className="app-wrapper" >
            <Header />
            <NavBar />
            <div className="app-wrapper__content">
            {/* <Dialogs /> */}
            <Profile/>
            </div>
        </div>
    );
}

export default App;