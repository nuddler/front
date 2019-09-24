import React, { Component } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { app, facebookProvider, googleProvider } from './base'
import { Button, Form } from 'react-bootstrap'
import { toast } from 'react-toastify'

import { LoginInfoContext } from './LoginInfoContext'

const loginStyles = {
  width: "90%",
  maxWidth: "315px",
  margin: "20px auto",
  border: "1px solid #ddd",
  borderRadius: "5px",
  padding: "10px"
}

interface LoginState {
  redirect: boolean,
  password: string,
  email: string
}

class Login extends Component<RouteComponentProps> {
  constructor(props) {
    super(props)
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.authWithGoogle = this.authWithGoogle.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)

    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  componentDidMount() {
    app.auth().onAuthStateChanged((newUser) => {
      if (newUser) {
        this.setState({ redirect: true })
      }
    })
  }

  state: LoginState = {
    redirect: false,
    password: "",
    email: ""
  }


  setCurrentUser(user: firebase.auth.UserCredential, setAuth) {
    setAuth(user.user);
  }

  authWithFacebook({ user, auth, setAuth }) {
    app.auth().signInWithPopup(facebookProvider)
      .then((user) => {
        this.setCurrentUser(user, setAuth)
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err));
  }

  authWithGoogle({ user, auth, setAuth }) {
    app.auth().signInWithPopup(googleProvider)
      .then((user) => {
        this.setCurrentUser(user, setAuth)
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err));
  }

  authWithEmailPassword(event, { user, auth, setAuth }) {
    event.preventDefault()

    const email = this.state.email;
    const password = this.state.password;

    app.auth().fetchProvidersForEmail(email)
      .then((providers) => {
        if (providers.length === 0) {
          // create user
          return app.auth().createUserWithEmailAndPassword(email, password) //todo Czy na pewno chce robić od razu konto ?
        } else if (providers.indexOf("password") === -1) {
          this.setState({ email: "", password: "" })
          toast.warn('🦄 Try alternative login.', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
          });
        } else {
          // sign user in
          return app.auth().signInWithEmailAndPassword(email, password)
        }
      })
      .then((user) => {
        if (user && user.user.email) {
          this.setCurrentUser(user, setAuth)
          this.setState({ redirect: true })
        }
      })
      .catch((error) => {
        toast.error(error.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
      })
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  render() {
    const { from } = (this.props.location.state && this.props.location.state.from.pathname === '/login' ? { from: { pathname: '/' } } : this.props.location.state) || { from: { pathname: '/' } }
    // const { from } = { from: { pathname: '/' } }


    if (this.state.redirect === true) {
      return <Redirect to={from} />
    }

    return (
      <LoginInfoContext.Consumer>
        {({ user, auth, setAuth }) => (

          <React.Fragment>
            <div style={loginStyles}>
              <div id="footer">
                <ul className="list-unstyled list-inline social text-center">
                  <li onClick={() => { this.authWithFacebook({ user, auth, setAuth }) }} className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
                  <li onClick={() => { this.authWithGoogle({ user, auth, setAuth }) }} className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
                </ul>
              </div>
              {/* <button style={{ width: "100%" }} className="pt-button pt-intent-primary" onClick={() => { this.authWithFacebook({ user, auth, setAuth }) }}>Log In with Facebook</button> */}
              {/* <button style={{ width: "100%" }} className="pt-button pt-intent-primary" onClick={() => { this.authWithGoogle({ user, auth, setAuth }) }}>Log In with Google</button> */}
              <hr style={{ marginTop: "10px", marginBottom: "10px" }} />

              <Form>
                <Form.Group controlId="formControlsEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange}
                  />
                  <Form.Text className="text-muted">
                    Lore ipsum.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formControlsPassword">
                  <Form.Label>Hasło</Form.Label>
                  <Form.Control type="password" placeholder="Hasło" value={this.state.password} onChange={this.handlePasswordChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(event) => { this.authWithEmailPassword(event, { user, auth, setAuth }) }}>
                  Login
                </Button>

              </Form>

            </div>
          </React.Fragment>
        )}
      </LoginInfoContext.Consumer>
    )
  }
}

export default Login
