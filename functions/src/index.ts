import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import createStoreUser from "./user/createStoreUser";
import deleteStoreUser from "./user/deleteStoreUser";
admin.initializeApp();

export const createStoreUserEvent = functions.auth
  .user()
  .onCreate(createStoreUser);

export const deleteStoreUserEvent = functions.auth
  .user()
  .onDelete(deleteStoreUser);
