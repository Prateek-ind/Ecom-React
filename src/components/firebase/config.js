import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2wuHfGZ3QFCwGIRIhVGjQzZHGE37UUr0",
  authDomain: "healthy-buddie-project-f6ce6.firebaseapp.com",
  databaseURL:
    "https://healthy-buddie-project-f6ce6-default-rtdb.firebaseio.com",
  projectId: "healthy-buddie-project-f6ce6",
  storageBucket: "healthy-buddie-project-f6ce6.firebasestorage.app",
  messagingSenderId: "270366057597",
  appId: "1:270366057597:web:78140e308372bcbed43d14",
  measurementId: "G-P4Y3DV5Q5M",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // Firebase Auth
export const rdb = getDatabase(app); // Firebase Realtime Database
export default app;
