// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBZmu02XoKHuGVNCSaVFxAs4PuRML62KOg",
  authDomain: "blog-beyond.firebaseapp.com",
  projectId: "blog-beyond",
  storageBucket: "blog-beyond.appspot.com",
  messagingSenderId: "856845070134",
  appId: "1:856845070134:web:efab1e8ccd06a914e28d97",
  measurementId: "G-25B1W39EDY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore  and Auth services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
