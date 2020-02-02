import { storage } from "../firebase";
import { FOLDERS } from "./folders";
import firebase from "firebase";

export const Storage = {
	uploadUserAvatar: async (file: File, metadata: any) => {
		// Upload file and metadata to the object 'images/mountains.jpg'
		const uploadTask = storage.child(`${FOLDERS.USERS}avatar.jpg`).put(file, metadata);
		const {TaskEvent: {STATE_CHANGED},TaskState} = firebase.storage;

		const complete = async () => {
			try {
				return (await uploadTask.snapshot.ref.getDownloadURL()) as string;
			} catch (error) {
				return null
			}
		};

		// Listen for state changes, errors, and completion of the upload.
		uploadTask.on(
			STATE_CHANGED,
			(snapshot: firebase.storage.UploadTaskSnapshot) => {
				const {bytesTransferred, totalBytes, state} = snapshot;
				
				// Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
				const progress = (bytesTransferred / totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
			
				switch (state) {
					case TaskState.PAUSED:
						console.log('Upload is paused');
						break;
					case TaskState.RUNNING:
						console.log('Upload is running');
						break;
				}
			}, 
			(error: any) => {

				// A full list of error codes is available at
				// https://firebase.google.com/docs/storage/web/handle-errors
				switch (error.code) {
					case 'storage/unauthorized':
						// User doesn't have permission to access the object
						break;
					case 'storage/canceled':
						// User canceled the upload
						break;
					case 'storage/unknown':
						// Unknown error occurred, inspect error.serverResponse
						break;
				}
			}, 
			complete
		);
		return await complete;
	}
}