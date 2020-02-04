import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/performance';
import 'firebase/storage';
import React from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyDbsHH_ztkk61xDQP9weQtLRE3SNJDNcHw',
  authDomain: 'react-firebase-material-admin.firebaseapp.com',
  databaseURL: 'https://react-firebase-material-admin.firebaseio.com',
  projectId: 'react-firebase-material-admin',
  storageBucket: 'react-firebase-material-admin.appspot.com',
  messagingSenderId: '502279795075',
  appId: '1:502279795075:web:d7adad030519ea1f66c6b6',
  measurementId: 'G-PQWP4BWECP'
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
