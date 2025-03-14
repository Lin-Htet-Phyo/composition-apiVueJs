// import firebase from "firebase/app";
// import "firebase/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqPxTGKDYMjSMmhCfekzzI34CQ2Fl3SEk",
  authDomain: "vue-blog-system-10857.firebaseapp.com",
  projectId: "vue-blog-system-10857",
  storageBucket: "vue-blog-system-10857.firebasestorage.app",
  messagingSenderId: "843091639542",
  appId: "1:843091639542:web:fe36b5042e5311de5c00d7"
};

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

// Firestore instance
// let db = firebase.firestore();
const db = getFirestore(firebaseApp);
let timestamp = serverTimestamp();
export { db, timestamp };
