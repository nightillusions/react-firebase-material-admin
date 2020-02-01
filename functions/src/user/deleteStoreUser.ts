import { UserRecord } from "firebase-functions/lib/providers/auth";
import admin = require("firebase-admin");

const deleteStoreUser = async (authUser: UserRecord) => {
	await admin
		.firestore()
		.collection("users/")
		.doc(authUser.uid).delete()
}

export default deleteStoreUser;