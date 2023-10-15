// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7BulvNjhUZITl7GGToSPvmExiFAuuPaQ",
  authDomain: "netflixgpt-7dd3e.firebaseapp.com",
  projectId: "netflixgpt-7dd3e",
  storageBucket: "netflixgpt-7dd3e.appspot.com",
  messagingSenderId: "631513917907",
  appId: "1:631513917907:web:611b15dd527586c6a4e726",
  measurementId: "G-37NXCG20WP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();