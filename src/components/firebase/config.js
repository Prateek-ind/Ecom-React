// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2wuHfGZ3QFCwGIRIhVGjQzZHGE37UUr0",
  authDomain: "healthy-buddie-project-f6ce6.firebaseapp.com",
  projectId: "healthy-buddie-project-f6ce6",
  storageBucket: "healthy-buddie-project-f6ce6.firebasestorage.app",
  messagingSenderId: "270366057597",
  appId: "1:270366057597:web:78140e308372bcbed43d14",
  measurementId: "G-P4Y3DV5Q5M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
