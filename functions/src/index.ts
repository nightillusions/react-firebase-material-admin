import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import createStoreUser from "./user/createStoreUser";
import deleteStoreUser from "./user/deleteStoreUser";
admin.initializeApp();

export const createStoreUserEvent = functions.region("europe-west1").auth
  .user()
  .onCreate(createStoreUser);

export const deleteStoreUserEvent = functions.region("europe-west1").auth
  .user()
  .onDelete(deleteStoreUser);
