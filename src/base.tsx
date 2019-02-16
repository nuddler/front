import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyClHnVPBS5D504y00OSNTYnHAU2rlWD-yE",
  authDomain: "mgr-project.firebaseapp.com",
  databaseURL: "https://mgr-project.firebaseio.com",
  projectId: "mgr-project",
  storageBucket: "mgr-project.appspot.com",
  messagingSenderId: "378621717161"
};

const app = firebase.initializeApp(config)
const facebookProvider = new firebase.auth.FacebookAuthProvider()
const googleProvider = new firebase.auth.GoogleAuthProvider()


export { app, facebookProvider, googleProvider }