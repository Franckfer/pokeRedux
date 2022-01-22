// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxM39mx_AMGuS9HGctRDcZEsb6H1Qru3c",
  authDomain: "crud-react-fc9ea.firebaseapp.com",
  projectId: "crud-react-fc9ea",
  storageBucket: "crud-react-fc9ea.appspot.com",
  messagingSenderId: "166602816716",
  appId: "1:166602816716:web:f2b839b78de8cb43c1d669"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const provider = new GoogleAuthProvider()
const googlePopup = signInWithPopup

export {auth, app, provider, googlePopup}
