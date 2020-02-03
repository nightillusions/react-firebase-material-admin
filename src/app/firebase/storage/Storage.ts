import firebase from 'firebase';
import { storage } from '../firebase';
import { FOLDERS } from './folders';

export const Storage = {
  uploadUserAvatar: async (
    userId: string,
    file: File,
    metadata: any = { contentType: 'image/jpeg' }
  ) => {
    const uploadTask = storage
      .child(`${FOLDERS.USERS}${userId}/avatar.jpg`)
      .put(file, metadata);
    const {
      TaskEvent: { STATE_CHANGED },
      TaskState
    } = firebase.storage;

    uploadTask.on(
      STATE_CHANGED,
      async (snapshot: firebase.storage.UploadTaskSnapshot) => {
        const { bytesTransferred, totalBytes, state } = snapshot;

        switch (state) {
          case TaskState.PAUSED:
            console.log('Upload is paused');
            break;
          case TaskState.RUNNING:
            console.log('Upload is running');
            break;
        }

        const progress = (bytesTransferred / totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
      (error: any) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case 'storage/unauthorized':
            break;
          case 'storage/canceled':
            break;
          case 'storage/unknown':
            break;
        }
      }
    );

    return uploadTask.then(snap => {
      return snap.ref.getDownloadURL();
    });
  }
};
