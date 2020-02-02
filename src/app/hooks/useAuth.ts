import { auth, User } from 'firebase';
import { useState, useEffect } from 'react';
import FirebaseApp, { db } from '../firebase';
import { COLLECTION } from '../firestore/Collections';
import { IUser } from '../models/User';

const useAuth = (loggedInFirebaseUser: User | null = null) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [authUser, setAuthUser] = useState<User | null>(loggedInFirebaseUser);
  const [pending, setPending] = useState(true);
  const signOut = () => auth().signOut();
  
  FirebaseApp.auth().onAuthStateChanged(async (firebaseUser: User | null) => {
    if (firebaseUser) {
      // const token = await authUser.getIdToken(true);
      // console.log(`Bearer ${token}`);

      
      setAuthUser(firebaseUser)
      setPending(false);

      // loadSignUpsSaga(store.dispatch)();
    } else {
      setUser(null);
      setAuthUser(null)
      setPending(false);
    }
  });

	useEffect(() => {
    const load = async () => {
      if(authUser){
        const dbUser = await db.collection(COLLECTION.USERS).doc(authUser.uid).get() as any;
        setUser({
          ...dbUser.data()
        });
      } else {
        setUser(null);
      }
    }
    load();
	}, [authUser]);

  return { user, authUser, pending, signOut };
};

export default useAuth;
