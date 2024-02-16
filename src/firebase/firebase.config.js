// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCilyK-ZbNm3Scu_mTiupAZtiF1UYZvRNA",
    authDomain: "coffee-store-client-ad2e9.firebaseapp.com",
    projectId: "coffee-store-client-ad2e9",
    storageBucket: "coffee-store-client-ad2e9.appspot.com",
    messagingSenderId: "893594575717",
    appId: "1:893594575717:web:d6fc618a11d085d47af78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;