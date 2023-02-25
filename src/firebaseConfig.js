import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// our web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBtcqgnNFydd0cxqqbb5pv7JwXc1LgipOE",
  authDomain: "cmrequest-251d2.firebaseapp.com",
  projectId: "cmrequest-251d2",
  storageBucket: "cmrequest-251d2.appspot.com",
  messagingSenderId: "336108114254",
  appId: "1:336108114254:web:58602e20cf2ab52d094e1f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
