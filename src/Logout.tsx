import { Spinner } from '@blueprintjs/core';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { app } from './base';
import { LoginInfoContext } from './LoginInfoContext'

interface LogoutState {
  redirect: boolean
}

class Logout extends Component {

  static contextType = LoginInfoContext

  state: LogoutState = {
    redirect: false
  }

  componentWillMount() {
    app.auth().signOut().then((user) => {
      const context = this.context;
      context.setAuth(null);
      this.setState({ redirect: true })
    })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }

    return (
      <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
        <h3>Logging Out</h3>
        <Spinner />
      </div>
    )
  }
}

export default Logout
