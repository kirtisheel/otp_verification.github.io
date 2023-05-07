// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCg4syqrK8mI-L-ZHYOu9xzeZCMnAc8Qzc",
  authDomain: "otp-phone-verification-1ccfb.firebaseapp.com",
  projectId: "otp-phone-verification-1ccfb",
  storageBucket: "otp-phone-verification-1ccfb.appspot.com",
  messagingSenderId: "448509272241",
  appId: "1:448509272241:web:583f1bfcbd44d88bb10290",
  measurementId: "G-BFNRQ9NWBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);