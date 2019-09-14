import React from 'react';
import NavBarContainer from './template/NavBarContainer';
import BodyContainer from './template/BodyContainer';
import FooterContainer from './template/FooterContainer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureApiService } from './api/api.service';

import { LoginInfoContext } from './LoginInfoContext';

export class App extends React.Component {

    state = {
        auth: false,
        user: null
    }

    setAuth = (user: firebase.auth.UserCredential) => {
        user.user.getIdToken().then(function (idToken) {  // <------ Check this line
            configureApiService(
                {},
                {
                    // Authorization: `Bearer ` + idToken
                    'X-Firebase-Auth' : idToken
                });
        });



        this.setState(state => ({
            auth: user !== null,
            user: user
        }));
    }

    constructor(props) {
        super(props);
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
