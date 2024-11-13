// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-5e27b.firebaseapp.com",
  projectId: "reactchat-5e27b",
  storageBucket: "reactchat-5e27b.firebasestorage.app",
  messagingSenderId: "653291540816",
  appId: "1:653291540816:web:08219619e904673a9b9c55"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);