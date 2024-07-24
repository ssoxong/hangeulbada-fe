// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC9z4QcNsvFdPs8hiBuTh5mWVn7feCPg9k",
    authDomain: "hangeulbada-fe.firebaseapp.com",
    projectId: "hangeulbada-fe",
    storageBucket: "hangeulbada-fe.appspot.com",
    messagingSenderId: "674755949892",
    appId: "1:674755949892:web:3aee9d9e62720b3cb7d311",
    measurementId: "G-28BXQBFPFF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//firebase deploy --only hosting:hangeulbada