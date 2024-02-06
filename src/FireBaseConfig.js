// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_nuAKL0-UmU2X2FO9Q2vsEb2Gtco5EO8",
  authDomain: "loginauthfirebase-99675.firebaseapp.com",
  projectId: "loginauthfirebase-99675",
  storageBucket: "loginauthfirebase-99675.appspot.com",
  messagingSenderId: "701066490705",
  appId: "1:701066490705:web:6c70d649d7db7347571970"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)