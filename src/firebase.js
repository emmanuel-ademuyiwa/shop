import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDNRnWoopkbNmZd1GWXCCTq0oi1jOBAmCE",
    authDomain: "e-commerce-37f61.firebaseapp.com",
    projectId: "e-commerce-37f61",
    storageBucket: "e-commerce-37f61.appspot.com",
    messagingSenderId: "957405379893",
    appId: "1:957405379893:web:06bc56d4bb7ca71e6ae07c",
    measurementId: "G-FGVKK5VFPR"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
