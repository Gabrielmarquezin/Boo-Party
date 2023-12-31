import { storage } from "../config/firebase";
import {ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"

export const getLinkFile :(file:File) => Promise<string> = (file :File)=>{
    let storageRef = ref(storage, 'comprovantes')

    const uploadTask = uploadBytesResumable(storageRef, file);
    
    return new Promise((resolve, reject)=>{
        uploadTask.on('state_changed', 
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                console.log('Upload is running');
                break;
            }
          }, 
          (error) => {
            reject(error)
          }, 
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL)
            });
          }
        );
    })
}
