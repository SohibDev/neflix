import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCcIPwSr8qVyemV0VajaUz4xCAVm5rYpMk",
  authDomain: "my-first-project-dc0f5.firebaseapp.com",
  projectId: "my-first-project-dc0f5",
  storageBucket: "my-first-project-dc0f5.appspot.com",
  messagingSenderId: "814650637023",
  appId: "1:814650637023:web:b598218827606d6ca7076a",
  measurementId: "G-GJK9K1XSJ5",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider };