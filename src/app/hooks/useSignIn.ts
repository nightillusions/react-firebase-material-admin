import firebase from 'firebase';
import {
  googleProvider,
  facebookProvider,
  microsoftProvider,
  twitterProvider,
  githubProvider
} from '../firebase';

const useSignInWith = () => {
  const google = firebase.auth().signInWithRedirect(googleProvider);
  const facebook = firebase.auth().signInWithRedirect(facebookProvider);
  const microsoft = firebase.auth().signInWithRedirect(microsoftProvider);
  const twitter = firebase.auth().signInWithRedirect(twitterProvider);
  const github = firebase.auth().signInWithRedirect(githubProvider);
  return { google, facebook, microsoft, twitter, github };
};

export default useSignInWith;
