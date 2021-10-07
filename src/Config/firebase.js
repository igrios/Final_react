import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBaZqJHexXwSYGLoEhrKDf4KuFJZiMCaLg",
  authDomain: "curso-4f2f6.firebaseapp.com",
  projectId: "curso-4f2f6",
  storageBucket: "curso-4f2f6.appspot.com",
  messagingSenderId: "847253511428",
  appId: "1:847253511428:web:b7b512549d4fee9e1b8451",
  measurementId: "G-0HDXCFWL7N"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebase;