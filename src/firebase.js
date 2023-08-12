// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react"
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAv4FyhRyx9mTGNcexXUrD8rgOsYH2KdZE",
  authDomain: "authentication-d0270.firebaseapp.com",
  projectId: "authentication-d0270",
  storageBucket: "authentication-d0270.appspot.com",
  messagingSenderId: "812647814227",
  appId: "1:812647814227:web:2e30c48e48b424748022a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return currentUser;
};

const firestore = getFirestore(app);

export { app, auth, firestore };