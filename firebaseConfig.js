// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBs695qKL5TbFaHRjGrOjCpdJxHw9VInsI",
  authDomain: "cards-d3ab2.firebaseapp.com",
  projectId: "cards-d3ab2",
  storageBucket: "cards-d3ab2.appspot.com",
  messagingSenderId: "49265520903",
  appId: "1:49265520903:web:2293fd13062c1fb06415a2",
  measurementId: "G-VKLYTWMG65",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
