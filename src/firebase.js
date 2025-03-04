// src/firebase.js
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyCmeImkxCt9ZKAMRnMxEWpgLdFeeM5os4I",
//     authDomain: "todo-app-3151e.firebaseapp.com",
//     projectId: "todo-app-3151e",
//     storageBucket: "todo-app-3151e.firebasestorage.app",
//     messagingSenderId: "890890822236",
//     appId: "1:890890822236:web:b3b9f771e809d2bb59fc99",
//     measurementId: "G-RSE1NG1893",
// };

// src/firebase.js
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};
