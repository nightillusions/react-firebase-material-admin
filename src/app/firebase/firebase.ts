import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import 'firebase/storage';
import React from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyD2cl79N0RiukMK9lU6atkL-wljQZYnmWc',
  authDomain: 'react-firebase-material-f3cba.firebaseapp.com',
  databaseURL: 'https://react-firebase-material-f3cba.firebaseio.com',
  projectId: 'react-firebase-material-f3cba',
  storageBucket: 'react-firebase-material-f3cba.appspot.com',
  messagingSenderId: '452104680681',
  appId: '1:452104680681:web:c16518c195d96c81302c78',
  measurementId: 'G-35YXC4J7TY'
};
firebase.firestore.setLogLevel('debug');

const FirebaseApp = firebase.initializeApp(firebaseConfig);

const analytics = firebase.analytics();
const perf = firebase.performance();
const db = firebase.firestore();
const storage = firebase.storage().ref();

const FirebaseContext = React.createContext(null);
const googleProvider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
const twitterProvider = new firebase.auth.TwitterAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();

export {
  db,
  storage,
  perf,
  analytics,
  FirebaseContext,
  googleProvider,
  facebookProvider,
  microsoftProvider,
  twitterProvider,
  githubProvider
};
export default FirebaseApp;
