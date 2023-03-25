// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAbnDkRM23jPRD4Nk-l7GKzqElWPg4Frw0",
    authDomain: "sample-project-1bbd3.firebaseapp.com",
    projectId: "sample-project-1bbd3",
    storageBucket: "sample-project-1bbd3.appspot.com",
    messagingSenderId: "560302289445",
    appId: "1:560302289445:web:cd63fbb760cc20ed9b85cc",
    measurementId: "G-MZ0K79XY7N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage()
export const db = getFirestore()