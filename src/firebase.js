// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDahYtgZBgn3OsFHie9cfWft1IdqmrKKM0",
    authDomain: "christotle--clone.firebaseapp.com",
    projectId: "christotle--clone",
    storageBucket: "christotle--clone.appspot.com",
    messagingSenderId: "215303717982",
    appId: "1:215303717982:web:71a6d8bbe9e493610320cf",
    measurementId: "G-2J8RHLLHDQ"
  };

  //Use this to initialize the firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  //use this these for db and auth
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };