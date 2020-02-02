import { IUser } from "../app/models/User.model";

export default (user: IUser): string => `${user.firstName} ${user.lastName}`
