// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBehEw4EVm38VLqkGTuFNsBy_lzEc-ypMU",
  authDomain: "myproject-74b0e.firebaseapp.com",
  projectId: "myproject-74b0e",
  storageBucket: "myproject-74b0e.appspot.com",
  messagingSenderId: "625951421238",
  appId: "1:625951421238:web:5b6e448de350a5e7fa7997"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);