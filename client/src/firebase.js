// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "task1-e3e90.firebaseapp.com",
  projectId: "task1-e3e90",
  storageBucket: "task1-e3e90.appspot.com",
  messagingSenderId: "551238657295",
  appId: "1:551238657295:web:feb6419d4fddf98a54ca7a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);