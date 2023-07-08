// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId




  // apiKey: "AIzaSyDG6DavE918WakDBKKrxqp3zHyaqpZ7Yg4",
  // authDomain: "porjotok-bus-service.firebaseapp.com",
  // projectId: "porjotok-bus-service",
  // storageBucket: "porjotok-bus-service.appspot.com",
  // messagingSenderId: "711693480124",
  // appId: "1:711693480124:web:ac35925bed379d56e4a0b9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;