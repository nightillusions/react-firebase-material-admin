import { db } from "../firebase";


export const Users = {
	get: async (userId: string) => {
		return (await db.collection("users/").doc(userId).get()).data;
	}
}

export default Users;