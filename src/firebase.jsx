import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBahn4hwbgSQR4Ge4nEZ9d3xvCE1N5hOXY",
  authDomain: "chatpage-72004.firebaseapp.com",
  projectId: "chatpage-72004",
  storageBucket: "chatpage-72004.appspot.com",
  messagingSenderId: "739313603814",
  appId: "1:739313603814:web:63e869d67b8e9e1d585727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const auth = getAuth(app)
export const db = getFirestore(app);