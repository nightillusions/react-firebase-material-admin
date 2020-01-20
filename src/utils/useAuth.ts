import { User, auth } from "firebase";
import { useState } from "react";
import Firebase from "./firebase";

const useAuth = (firebaseUser: User | null = null) => {
	const [user, setUser] = useState<User | null>(firebaseUser);
	const [pending, setPending] = useState(true);

	Firebase.auth().onAuthStateChanged(async (authUser: User | null) => {
		if (authUser && authUser.email) {
			const token = await authUser.getIdToken(true);
			console.log(`Bearer ${token}`);

			setUser(authUser);
			setPending(false);

			// loadSignUpsSaga(store.dispatch)();
		} else {
			auth().signOut();
			setUser(null);
			setPending(false);
		}
	});

	return { user, pending }
}
 
export default useAuth;