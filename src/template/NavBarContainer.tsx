import React from 'react';
import { Link } from "react-router-dom";
import { LoginInfoContext } from '../LoginInfoContext'

interface NavBarContainerState {
  // authenticated: boolean
}

export default class NavBarContainer extends React.Component {
  state: NavBarContainerState = {
    // authenticated: false
  }

  componentDidMount() {
    // let login = localStorage.getItem("firebase-authenticated");
    // if (login && login === "1") {
    //   this.setState({ authenticated: true })
    // }
  }

  render() {
    return (
      <LoginInfoContext.Consumer>
        {({ user, auth, setAuth }) => (

          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">Fleeter</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  {auth ? (
                    <React.Fragment>
                      <li className="nav-item active">
                        <Link className="nav-link" to="/">Home - {user.user.email}</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/personal">Personal Data</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/logout" aria-label="Log Out">Logout</Link>
                      </li>
                    </React.Fragment>
                  ) :
                    (
                      <li className="nav-item">
                        <Link className="nav-link" to="/login" aria-label="Login">Login</Link>
                      </li>
                    )}

                </ul>
              </div>
            </div>
          </nav>
        )}
      </LoginInfoContext.Consumer>
    );
  }
}