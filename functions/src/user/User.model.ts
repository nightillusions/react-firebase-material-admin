import { UserRecord } from "firebase-functions/lib/providers/auth";

export interface IUserTemplate {
	id: string;
  email: string | null;
  phone: string | null;
	firstName: string | null;
	lastName: string | null; 
  avatarUrl: string | null;
}

export interface IUser extends IUserTemplate {
	timezone: string | null;
  address: IUserAddress | null;
  updatedAt: number;
  createdAt: number;
}

export interface IUserAddress {
  country: string;
  state: string;
  city: string;
  street: string;
}

export type IAppUser = IUser & UserRecord;