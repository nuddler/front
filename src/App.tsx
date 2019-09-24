import React from 'react';
import NavBarContainer from './template/NavBarContainer';
import BodyContainer from './template/BodyContainer';
import FooterContainer from './template/FooterContainer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureApiService } from './api/api.service';

import { LoginInfoContext } from './LoginInfoContext';
import { app } from './base';

export class App extends React.Component {

    state = {
        auth: false,
        user: null
    }

    setAuth = (newUser: firebase.User) => {
        if (newUser) {
            newUser.getIdToken().then(function (idToken) {
                configureApiService(
                    {},
                    {
                        'X-Firebase-Auth': idToken
                    });
            });
        }

        this.setState(state => ({
            auth: newUser !== null,
            user: newUser
        }));
    }

    constructor(props) {
        super(props);
        app.auth().onAuthStateChanged((newUser) => {
            this.setAuth(newUser);
        })
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <LoginInfoContext.Provider value={{ user: this.state.user, auth: this.state.auth, setAuth: this.setAuth }}>
                            <NavBarContainer />
                            <BodyContainer />
                            <FooterContainer />
                        </LoginInfoContext.Provider>
                    </React.Fragment>
                </Router>
            </React.Fragment>
        );
    }
}
