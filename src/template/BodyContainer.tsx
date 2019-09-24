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

import { LoginInfoContext } from '../LoginInfoContext'

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
    authenticated: false
  }

  render() {
    return (
      <LoginInfoContext.Consumer>
        {({ user, auth }) => (
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

              <AuthenticatedRoute path="/personal" component={Personal} authenticated={auth} />
              <AuthenticatedRoute exact path="/about" component={About} authenticated={auth} />

              <AuthenticatedRoute path="/" component={Home} authenticated={auth} />
              <Route component={NotFound} />
            </Switch>
            <ModalContainer />
          </div>
        )}
      </LoginInfoContext.Consumer>
    );
  }
}