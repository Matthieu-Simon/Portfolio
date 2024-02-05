// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxbV0L4PwuwbBBIb6m1eqJv-EgTahJisQ",
  authDomain: "portfolio-ms-336df.firebaseapp.com",
  projectId: "portfolio-ms-336df",
  storageBucket: "portfolio-ms-336df.appspot.com",
  messagingSenderId: "1097504005679",
  appId: "1:1097504005679:web:e5cf2db3dee6e5914d30da",
  measurementId: "G-NFZYPC7QFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, deleteDoc, updateDoc, doc };