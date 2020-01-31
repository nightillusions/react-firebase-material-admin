import { auth, User } from 'firebase';
import { useState } from 'react';
import getFirstName from '../../utils/getFirstName';
import getLastName from '../../utils/getLastName';
import FirebaseApp from '../firebase';
import Users from '../firestore/User';

const useAuth = (firebaseUser: User | null = null) => {
  const [user, setUser] = useState<User | null>(firebaseUser);
  const [pending, setPending] = useState(true);
  const signOut = () => auth().signOut();

  FirebaseApp.auth().onAuthStateChanged(async (authUser: User | null) => {
    if (authUser) {
      // const token = await authUser.getIdToken(true);
      // console.log(`Bearer ${token}`);

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const user = await Users.create({
        id: authUser.uid,
        email: authUser.email ? authUser.email : "",
        firstName: authUser.displayName ? getFirstName(authUser.displayName) : "",
        lastName: authUser.displayName ? getLastName(authUser.displayName) : "",
        phone: null,
        avatarUrl: authUser.photoURL
      })

      setUser(authUser);
      setPending(false);

      // loadSignUpsSaga(store.dispatch)();
    } else {
      setUser(null);
      setPending(false);
    }
  });

  return { user, pending, signOut };
};

export default useAuth;
