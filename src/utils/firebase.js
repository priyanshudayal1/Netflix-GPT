/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbqRj6J4jnMK0irDAblgDLv_twUHSriHE",
  authDomain: "netflixgpt-82c88.firebaseapp.com",
  projectId: "netflixgpt-82c88",
  storageBucket: "netflixgpt-82c88.appspot.com",
  messagingSenderId: "316726472134",
  appId: "1:316726472134:web:26fc1594e340ac625d16c7",
  measurementId: "G-PC9T5XJ3C6"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();