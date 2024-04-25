import { initializeApp } from "firebase/app";
import {
    connectAuthEmulator,
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    sendEmailVerification,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
  } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAhpNzRl257PYbsJUFRrvsUjVixETUcEc4",
    authDomain: "music-hunt-fvargasd.firebaseapp.com",
    projectId: "music-hunt-fvargasd",
    storageBucket: "music-hunt-fvargasd.appspot.com",
    messagingSenderId: "487649981389",
    appId: "1:487649981389:web:c6fbb9348eb96f3c9b8a84"
  };
  
  //firebase.initializeApp(firebaseConfig)
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = getAuth();

  export async function loginUser(email:string, password:string) {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password)
        console.log(res)
        return true
    } catch (error) {
        console.log(error)
        return false
    }
    
  }