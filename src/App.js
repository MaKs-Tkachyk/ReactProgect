import React from 'react';
import { Route } from 'react-router';
import './App.css';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import Header from './сomponents/Header/Header';
import Music from './сomponents/Music/Music';
import NavBar from './сomponents/NavBar/NavBar';
import News from './сomponents/News/News';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import Settings from './сomponents/Settings/Settings';
import UsersContainer from './сomponents/Users/UsersContainer';

const App = (props) => {

    return (
        <div className="app-wrapper" >
            <Header />
            <NavBar />
            <div className="app-wrapper__content">
                <Route path="/profile" render={() =>
                    <ProfileContainer
                        store={props.store}

                    />} />
                <Route path="/dialogs" render={() =>
                    <DialogsContainer
                        store={props.store}
                    />} />
                <Route path="/music" render={() => <Music />} />
                <Route path="/news" render={() => <News />} />
                <Route path="/settings" render={() => <Settings />} />
                <Route path="/users" render={() => <UsersContainer />} />
            </div>
        </div>
    );
}

export default App;