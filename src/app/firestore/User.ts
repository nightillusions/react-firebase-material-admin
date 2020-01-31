import { db } from "../firebase";
import { IUserTemplate } from "../models/User";


export const Users = {
	create: async (user: IUserTemplate) => {
		const userRef = await db.collection("users/").doc(user.id);
		await userRef.set(user, { merge: true }).catch(error => { console.log(error.message); });
		return userRef;
	}
}

export default Users;