// eslint-disable-next-line no-unused-vars
import * as firebase from "firebase";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCun_AmUg1fk0-VN80PuO9uSPh9YkNcah4",
  authDomain: "healhub-397223.firebaseapp.com",
  projectId: "healhub-397223",
  storageBucket: "healhub-397223.appspot.com",
  messagingSenderId: "480651764950",
  appId: "1:480651764950:web:f8c1cb186354c6aaec1577"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleAuthProvider = firebase.GoogleAuthProvider();