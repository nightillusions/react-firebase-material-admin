import { db } from "../firebase";
import { IUser } from "../../models/User.model";
import firebase from "firebase";


export const Users = {
	get: async (userId: string) => {
		return (await db.collection("users/").doc(userId).get()).data;
	},
	update: async (updatedUser: IUser) => {
		const doc = db.collection("users/").doc(updatedUser.id);
		await doc.update({...updatedUser, updatedAt: firebase.firestore.FieldValue.serverTimestamp()})
	}
}

export default Users;