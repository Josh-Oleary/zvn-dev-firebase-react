// Import the functions you need from the SDKs you need
import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDm36KHEyYXOulialpX54BhpHiubw9r7E8",
  authDomain: "final-todo-f32b7.firebaseapp.com",
  databaseURL: "https://final-todo-f32b7-default-rtdb.firebaseio.com",
  projectId: "final-todo-f32b7",
  storageBucket: "final-todo-f32b7.appspot.com",
  messagingSenderId: "608244788439",
  appId: "1:608244788439:web:128cbfe3d5d80308329492",
  measurementId: "G-WBQMTF42ZE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);