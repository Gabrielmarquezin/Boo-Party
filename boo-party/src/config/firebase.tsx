// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC2gBh2JXZbnqc2Rv7TtrNTjU_gyMi1_P8",
  authDomain: "boo-party-d23b5.firebaseapp.com",
  projectId: "boo-party-d23b5",
  storageBucket: "boo-party-d23b5.appspot.com",
  messagingSenderId: "121334104028",
  appId: "1:121334104028:web:4f777fa7d56812cc2a5919",
  measurementId: "G-BZDBLS77WJ"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
export const storage = getStorage(firebase)
