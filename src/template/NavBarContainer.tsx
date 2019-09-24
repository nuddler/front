import React from 'react';
import { Link } from "react-router-dom";
import { LoginInfoContext } from '../LoginInfoContext'
import { Navbar, Nav } from 'react-bootstrap';

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
        {({ user, auth }) => (
          <div className="p-2">
            <Navbar className="rounded" collapseOnSelect expand="lg" bg="primary" variant="dark">
              <Navbar.Brand><Link className="navbar-brand" to="/">Fleeter - React.Js</Link></Navbar.Brand>
              {auth && (
                <Navbar.Text>
                  Zalogowany: {user.displayName}
                </Navbar.Text>
              )}
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                  {auth ? (
                    <React.Fragment>
                      <Nav.Item><Link className="nav-link" to="/">Home </Link></Nav.Item>
                      <Nav.Item><Link className="nav-link" to="/personal">Konto</Link></Nav.Item>
                      <Nav.Item><Link className="nav-link" to="/about">O Nas</Link></Nav.Item>
                      <Nav.Item><Link className="nav-link" to="/logout">Logout</Link></Nav.Item>
                    </React.Fragment>
                  ) :
                    (
                      <Nav.Item><Link className="nav-link" to="/login">Login</Link></Nav.Item>
                    )}
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
        )}

      </LoginInfoContext.Consumer>
    );
  }
}