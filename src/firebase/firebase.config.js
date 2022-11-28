// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuZ-Qd9C3GIVS8FEq_bTfE9aZCWAful-w",
  authDomain: "smartphone-reseller.firebaseapp.com",
  projectId: "smartphone-reseller",
  storageBucket: "smartphone-reseller.appspot.com",
  messagingSenderId: "726035770509",
  appId: "1:726035770509:web:9fba84d308c13473af86c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;