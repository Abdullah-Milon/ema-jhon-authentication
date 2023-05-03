// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0ujSZBqD5BGLHcseGgb2GIojFARhaaSM",
  authDomain: "ema-jhon-with-firebase-a-f9ecf.firebaseapp.com",
  projectId: "ema-jhon-with-firebase-a-f9ecf",
  storageBucket: "ema-jhon-with-firebase-a-f9ecf.appspot.com",
  messagingSenderId: "981851175364",
  appId: "1:981851175364:web:b407200d3bf1b8d38d8c91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;