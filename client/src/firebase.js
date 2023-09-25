// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDaRz1GIXrS-oeR4pMgtu15HONa7FDiZHI",
  authDomain: "clone-1f8c4.firebaseapp.com",
  projectId: "clone-1f8c4",
  storageBucket: "clone-1f8c4.appspot.com",
  messagingSenderId: "472167000339",
  appId: "1:472167000339:web:672fbacdf8acc78e1c92e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage();