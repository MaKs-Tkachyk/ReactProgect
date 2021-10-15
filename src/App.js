import React from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Dialogs from './сomponents/Dialogs/Dialogs';
import Header from './сomponents/Header/Header';
import Music from './сomponents/Music/Music';
import NavBar from './сomponents/NavBar/NavBar';
import News from './сomponents/News/News';
import Profile from './сomponents/Profile/Profile';
import Settings from './сomponents/Settings/Settings';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper" >
                <Header />
                <NavBar />
                <div className="app-wrapper__content">
                    <Route path="/profile" render={() => <Profile postsData={props.postsData} />} />
                    <Route path="/dialogs" render={() => <Dialogs dialogs={props.dialogs} messages={props.messages} />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/settings" render={() => <Settings />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;