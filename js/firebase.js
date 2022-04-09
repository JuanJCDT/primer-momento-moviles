// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB7xNIYW-uuqOUAvUNGJAlV05-NR5cXAcQ",
    authDomain: "primermomentosabado.firebaseapp.com",
    projectId: "primermomentosabado",
    storageBucket: "primermomentosabado.appspot.com",
    messagingSenderId: "92009719339",
    appId: "1:92009719339:web:8954477d239814a6d1ac6e",
    measurementId: "G-L1W6EJJ85C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);