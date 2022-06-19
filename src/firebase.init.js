// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwvr1f8QpOGENoDk2aa4xQecOnh9egz1g",
  authDomain: "mojar-dokan.firebaseapp.com",
  projectId: "mojar-dokan",
  storageBucket: "mojar-dokan.appspot.com",
  messagingSenderId: "663699467839",
  appId: "1:663699467839:web:edba868d4375a35a5d528a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
let auth = getAuth(app);

export default auth;

