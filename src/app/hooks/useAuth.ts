import { auth, User } from 'firebase';
import { useState, useEffect } from 'react';
import FirebaseApp, { db } from '../firebase';
import { COLLECTION } from '../firestore/Collections';
import { IUser } from '../models/User.model';

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
      if(authUser){
      db.collection(COLLECTION.USERS).doc(authUser.uid).onSnapshot(async (doc: any)=>{
        const user = doc.data();
        setUser({
          avatarUrl: await user.avatarUrl,
          ...user
        });
      });
    } else {
      setUser(null);
    }
	}, [authUser]);

  return { user, authUser, pending, signOut };
};

export default useAuth;
