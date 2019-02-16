import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { ModalContainer } from 'react-router-modal';
import NotFound from '../errors/NotFound';
import Login from '../Login';
import Logout from '../Logout';
import About from '../views/About';
import Home from '../views/Home';
import Personal from '../views/Personal';
import { ToastContainer } from 'react-toastify';

import 'react-router-modal/css/react-router-modal.css';
import 'react-toastify/dist/ReactToastify.css';

interface BodyContainerState {
  authenticated: boolean
}

function AuthenticatedRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} {...rest} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />} />
  )
}

export default class BodyContainer extends React.Component {

  state: BodyContainerState = {
    //authenticated: false
    authenticated: true

  }

  componentDidMount() {
    let login = localStorage.getItem("firebase-authenticated");
    if (login && login === "1") {
      this.setState({ authenticated: true })
    } else {
      this.forceUpdate();
    }
  }

  render() {
    return (
      <div className="container" >
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          // pauseOnVisibilityChange={false}
          draggable
          pauseOnHover
        />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

          <AuthenticatedRoute path="/personal" component={Personal} authenticated={this.state.authenticated} />
          <AuthenticatedRoute exact path="/about" component={About} authenticated={this.state.authenticated} />

          <AuthenticatedRoute path="/" component={Home} authenticated={this.state.authenticated} />
          <Route component={NotFound} />
        </Switch>
        <ModalContainer />
      </div>
    );
  }
}