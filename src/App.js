import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router';
import { compose } from 'redux';
import './App.css';
import { initializeApp } from './Redux/app-reducer';
import Preloader from './сomponents/common/preloader/Preloader';
import DialogsContainer from './сomponents/Dialogs/DialogsContainer';
import HeaderContainer from './сomponents/Header/HeaderContainer';
import Login from './сomponents/Login/Login';
import Music from './сomponents/Music/Music';
import NavBar from './сomponents/NavBar/NavBar';
import News from './сomponents/News/News';
import ProfileContainer from './сomponents/Profile/ProfileContainer';
import Settings from './сomponents/Settings/Settings';
import UsersContainer from './сomponents/Users/UsersContainer';

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initilized) {
            return <Preloader />
        }
        return (
            <div className="app-wrapper" >
                <HeaderContainer />
                <NavBar />
                <div className="app-wrapper__content">
                    <Route path='/profile/:userId?' render={() =>
                        <ProfileContainer />} />
                    <Route path="/dialogs" render={() =>
                        <DialogsContainer />} />
                    <Route path="/music" render={() => <Music />} />
                    <Route path="/news" render={() => <News />} />
                    <Route path="/settings" render={() => <Settings />} />
                    <Route path="/users" render={() => <UsersContainer />} />
                    <Route path="/login" render={() => <Login />} />
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        initilized: state.appPage.initilized
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp })
)(App)