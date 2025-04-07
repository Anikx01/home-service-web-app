// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJqpvNG1gAycNHvyIj3NB4ueDU2DDFgD4",
  authDomain: "home-service-app-9be9f.firebaseapp.com",
  projectId: "home-service-app-9be9f",
  storageBucket: "home-service-app-9be9f.firebasestorage.app",
  messagingSenderId: "326036885178",
  appId: "1:326036885178:web:3ec3187cb12814bd883c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;