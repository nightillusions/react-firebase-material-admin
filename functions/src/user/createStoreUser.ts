import { UserRecord } from "firebase-functions/lib/providers/auth";
import admin = require("firebase-admin");
import getFirstName from "../utils/getFirstName";
import getLastName from "../utils/getLastName";

const createStoreUser = async (authUser: UserRecord) => {
	await admin
		.firestore()
		.collection("users/")
		.doc(authUser.uid)
		.set({
			id: authUser.uid,
			email: authUser.email ? authUser.email : "",
			firstName: authUser.displayName
				? getFirstName(authUser.displayName)
				: "",
			lastName: authUser.displayName ? getLastName(authUser.displayName) : "",
			phone: authUser.phoneNumber || null,
			avatarUrl: authUser.photoURL || null
		})
		.catch(error => {
			console.error(error.message);
		});
}

export default createStoreUser;