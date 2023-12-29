// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getAuth} from "firebase/auth";
// // const firebaseConfig = {
// //   apiKey: "AIzaSyCN6HmsWOwmpUmlV9l5uoOP_2mXH5akfe8",
// //   authDomain: "suraksha-squad.firebaseapp.com",
// //   projectId: "suraksha-squad",
// //   storageBucket: "suraksha-squad.appspot.com",
// //   messagingSenderId: "953984437023",
// //   appId: "1:953984437023:web:4c2fa3bd330cc170ad7e2a",
// //   measurementId: "G-5R31PYTKWB"
// // };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// export {app ,auth}

// firebase/firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCN6HmsWOwmpUmlV9l5uoOP_2mXH5akfe8",
      authDomain: "suraksha-squad.firebaseapp.com",
      projectId: "suraksha-squad",
      storageBucket: "suraksha-squad.appspot.com",
      messagingSenderId: "953984437023",
      appId: "1:953984437023:web:4c2fa3bd330cc170ad7e2a",
      measurementId: "G-5R31PYTKWB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
