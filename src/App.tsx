import React from 'react';
import NavBarContainer from './template/NavBarContainer';
import BodyContainer from './template/BodyContainer';
import FooterContainer from './template/FooterContainer';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureApiService } from './api/api.service';

export class App extends React.Component {

    constructor(props) {
        super(props);
        configureApiService(
            {},
            {
                // Authorization: `Bearer ` + data
            });
    }

    render() {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <NavBarContainer />
                        <BodyContainer />
                        <FooterContainer />
                    </React.Fragment>
                </Router>
            </React.Fragment>
        );
    }
}
