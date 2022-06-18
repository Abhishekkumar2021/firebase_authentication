import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA2mMgX_cl-3IVKwbb0gC3hX1899HnHox8",
  authDomain: "fir-authentication-2b94e.firebaseapp.com",
  projectId: "fir-authentication-2b94e",
  storageBucket: "fir-authentication-2b94e.appspot.com",
  messagingSenderId: "740755545295",
  appId: "1:740755545295:web:e0c1775231517fbd0aebba",
  measurementId: "G-XPCKQRCQ8C",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); 

