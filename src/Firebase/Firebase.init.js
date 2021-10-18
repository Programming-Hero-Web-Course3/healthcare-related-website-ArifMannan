import { initializeApp } from "firebase/app";
// import firebaseConfig from "./firebase.config";
const firebaseConfig = {
    apiKey: "AIzaSyDNiehNg0jy2b7D0E97IZAcoYbq8vLG6RM",
  authDomain: "ora-care.firebaseapp.com",
  projectId: "ora-care",
  storageBucket: "ora-care.appspot.com",
  messagingSenderId: "186009890770",
  appId: "1:186009890770:web:fe95bde84c7246e33ee20b"
};
const FirebaseInitialize = () => {
    
    initializeApp(firebaseConfig);
}
export default FirebaseInitialize;
