
import firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCkUiJi9x22Q2ncQnZ5Kur-N6lG64tNnVo",
  authDomain: "chat-app-9cff7.firebaseapp.com",
  projectId: "chat-app-9cff7",
  storageBucket: "chat-app-9cff7.appspot.com",
  messagingSenderId: "487245861423",
  appId: "1:487245861423:web:3e8962eebaad3075c92cda",
  measurementId: "G-2Q30HDC0GF"
};
// Initialize Firebase
const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
export default db ;
