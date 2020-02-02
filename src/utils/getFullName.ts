import { IUser } from "../app/models/User";

export default (user: IUser): string => `${user.firstName} ${user.lastName}`
