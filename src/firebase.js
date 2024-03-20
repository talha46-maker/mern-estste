// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-5633b.firebaseapp.com",
  projectId: "mern-estate-5633b",
  storageBucket: "mern-estate-5633b.appspot.com",
  messagingSenderId: "468560893178",
  appId: "1:468560893178:web:f68986a97034ae2f5de543"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);