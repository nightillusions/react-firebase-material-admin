import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';
import React from 'react';

const firebaseConfig = {
  apiKey: 'AIzaSyD7vKFs37Lh7WaEzjRL_g0i-uYDkkv_9ZQ',
  authDomain: 'trador-e5310.firebaseapp.com',
  databaseURL: 'https://trador-e5310.firebaseio.com',
  projectId: 'trador-e5310',
  storageBucket: 'trador-e5310.appspot.com',
  messagingSenderId: '721326177413',
  appId: '1:721326177413:web:6d527c14e63e0649b5bdec',
  measurementId: 'G-044QX56BXY'
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
