import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSzp2WmQsloNGqYdmcBGdjOrtkqWvVm7Y",
  authDomain: "react-contacts-app-9648f.firebaseapp.com",
  projectId: "react-contacts-app-9648f",
  storageBucket: "react-contacts-app-9648f.appspot.com",
  messagingSenderId: "1032778056983",
  appId: "1:1032778056983:web:262b60199b05cf10b16352"
};
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  export default firebase;