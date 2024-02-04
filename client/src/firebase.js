// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "projekat-6976c.firebaseapp.com",
  projectId: "projekat-6976c",
  storageBucket: "projekat-6976c.appspot.com",
  messagingSenderId: "979382127658",
  appId: "1:979382127658:web:f1f20a0c5010bd5b75c753"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);