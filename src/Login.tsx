import React, { Component } from 'react'
import { Redirect, RouteComponentProps } from 'react-router-dom'
import { app, facebookProvider, googleProvider } from './base'
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import { toast } from 'react-toastify'

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

function FieldGroup({ id, label, help = false, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
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

  state: LoginState = {
    redirect: false,
    password: "",
    email: ""
  }

  setCurrentUser(user) {
    if (user) {
      localStorage.setItem("firebase-user", user);
      localStorage.setItem("firebase-authenticated", "1");
    } else {
      localStorage.removeItem("firebase-user");
      localStorage.setItem("firebase-authenticated", "0");
    }
  }

  authWithFacebook() {
    app.auth().signInWithPopup(facebookProvider)
      .then((user) => {
        this.setCurrentUser(user)
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err));
  }

  authWithGoogle() {
    app.auth().signInWithPopup(googleProvider)
      .then((user) => {
        this.setCurrentUser(user)
        this.setState({ redirect: true })
      })
      .catch(err => console.log(err));
  }

  authWithEmailPassword(event) {
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
          console.log(user)
          this.setCurrentUser(user)
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
    const { from } = this.props.location.state || { from: { pathname: '/' } }

    if (this.state.redirect === true) {
      return <Redirect to={from} />
    }

    return (
      <div style={loginStyles}>
        <button style={{ width: "100%" }} className="pt-button pt-intent-primary" onClick={() => { this.authWithFacebook() }}>Log In with Facebook</button>
        <button style={{ width: "100%" }} className="pt-button pt-intent-primary" onClick={() => { this.authWithGoogle() }}>Log In with Google</button>
        <hr style={{ marginTop: "10px", marginBottom: "10px" }} />

        <form>
          <FieldGroup
            id="formControlsEmail"
            type="email"
            label="Email address"
            placeholder="Enter email"
            value={this.state.email}
            onChange={this.handleEmailChange}

          />
          <FieldGroup
            id="formControlsPassword"
            label="Password"
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />

          <Button type="submit" onClick={(event) => { this.authWithEmailPassword(event) }} >Submit</Button>
        </form>
      </div>
    )
  }
}

export default Login
