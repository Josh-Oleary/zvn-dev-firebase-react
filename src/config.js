import { initializeApp } from 'firebase/app';
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBB_dEP56mbGfLOwSwDt08mAlF4dwiBq7E',
  authDomain: 'final-todo-f32b7.firebaseapp.com',
  databaseURL: 'https://final-todo-f32b7-default-rtdb.firebaseio.com',
  projectId: 'final-todo-f32b7',
  storageBucket: 'final-todo-f32b7.appspot.com',
  messagingSenderId: '608244788439',
  appId: '1:608244788439:android:f9342d207e84851b329492',
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

