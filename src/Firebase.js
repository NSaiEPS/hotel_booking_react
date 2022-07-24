// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCARbTrS3eE2Vwt2rakXxytGFvdg9gakAE",
  authDomain: "hotel-booking-react-d02c3.firebaseapp.com",
  projectId: "hotel-booking-react-d02c3",
  storageBucket: "hotel-booking-react-d02c3.appspot.com",
  messagingSenderId: "465654460816",
  appId: "1:465654460816:web:10925912274466bb468315",
  measurementId: "G-3L4XQ3Q7QT"
};

const firebaseApp=firebase.initializeApp(firebaseConfig)
const db=firebaseApp.firestore()
const auth=firebase.auth()
const provider= new firebase.auth.GoogleAuthProvider();

export  {db,auth,provider};