import { Redirect, RouteComponentProps } from '@reach/router';
import React from 'react';
import { Auth } from '../../App';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

type IProps = RouteComponentProps;

const SignOut: React.FC<IProps> = () => {
  const { user, signOut, pending } = Auth.useContainer();
  if (user) {
    signOut();
  }

  if (pending) {
    return <LoadingSpinner />;
  }

  return <Redirect from="" to="/sign-in" noThrow />;
};

export default SignOut;
