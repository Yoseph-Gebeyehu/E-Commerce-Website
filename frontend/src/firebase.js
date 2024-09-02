// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9xA-7TyMtIYuovYQgY7Ccbiqa3rORx8M",
  authDomain: "authentication-7684e.firebaseapp.com",
  projectId: "authentication-7684e",
  storageBucket: "authentication-7684e.appspot.com",
  messagingSenderId: "119890044690",
  appId: "1:119890044690:web:5af735d1088b92bef075cb",
  measurementId: "G-NV6JEDVVXD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
