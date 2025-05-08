// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCxIIVskabCHcVbTjAgNkt2BXyQU47rp7A",
  authDomain: "clone-cf6cc.firebaseapp.com",
  projectId: "clone-cf6cc",
  storageBucket: "clone-cf6cc.firebasestorage.app",
  messagingSenderId: "679329230443",
  appId: "1:679329230443:web:6cfb419c94789515e9cb2e",
  measurementId: "G-MDRF5EKB9L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);