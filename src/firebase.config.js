// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAueRfpN044my7lPZYYANdFcdaXlZmZPug",
  authDomain: "form-genius.firebaseapp.com",
  projectId: "form-genius",
  storageBucket: "form-genius.appspot.com",
  messagingSenderId: "950786124839",
  appId: "1:950786124839:web:9a429e8077ba5174f9b202",
  measurementId: "G-E9GQNLXK6Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
