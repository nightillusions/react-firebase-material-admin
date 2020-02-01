import { UserRecord } from "firebase-functions/lib/providers/auth";
import admin = require("firebase-admin");
import getFirstName from "../utils/getFirstName";
import getLastName from "../utils/getLastName";
import { IUser } from "./User.model";

const createStoreUser = async (authUser: UserRecord) => {
	const user: IUser = {
		id: authUser.uid,
		email: authUser.email ? authUser.email : null,
		firstName: authUser.displayName
			? getFirstName(authUser.displayName)
			: null,
		lastName: authUser.displayName ? getLastName(authUser.displayName) : null,
		phone: authUser.phoneNumber || null,
		avatarUrl: authUser.photoURL || null,
		address: null,
		timezone: null,
		updatedAt: Date.now(),
		createdAt: Date.now()
	}
	await admin
		.firestore()
		.collection("users/")
		.doc(user.id)
		.set(user)
		.catch(error => {
			console.error(error.message);
		});
}

export default createStoreUser;