import { User } from "firebase";

export interface IUserTemplate {
	id: string;
  email: string | null;
  phone: string | null;
	firstName: string;
	lastName: string; 
  avatarUrl: string | null;
}

export interface IUser extends IUserTemplate {
	timezone?: string;
  address: IUserAddress | null;
  createdAt: number;
}

export interface IUserAddress {
  country: string;
  state: string;
  city: string;
  street: string;
}

export type IAppUser = IUser & User;