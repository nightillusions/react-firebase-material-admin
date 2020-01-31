import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';

const firebaseConfig = {
  apiKey: "AIzaSyBYYDESplkFGW3GMLjTPWK1i4MeRBVfqjE",
  authDomain: "pushtrade-b3877.firebaseapp.com",
  databaseURL: "https://pushtrade-b3877.firebaseio.com",
  projectId: "pushtrade-b3877",
  storageBucket: "pushtrade-b3877.appspot.com",
  messagingSenderId: "187823055670",
  appId: "1:187823055670:web:0124621ab3fdbff32e0997",
  measurementId: "G-G7ZS6G43PN"
};
firebase.firestore.setLogLevel('debug');

const Firebase = firebase.initializeApp(firebaseConfig);

Firebase.analytics();
Firebase.performance();

Firebase.firestore()
  .enablePersistence()
  .catch(err => {
    console.log('Persistence disabled: ', err.code);
    if (err.code === 'failed-precondition') {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
    } else if (err.code === 'unimplemented') {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
    }
  });

const FirebaseContext = React.createContext(null);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export {
  FirebaseContext,
  googleProvider,
  facebookProvider,
  microsoftProvider,
  twitterProvider,
  githubProvider
};
export default Firebase;
