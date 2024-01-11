
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCN6HmsWOwmpUmlV9l5uoOP_2mXH5akfe8",
  authDomain: "suraksha-squad.firebaseapp.com",
  projectId: "suraksha-squad",
  storageBucket: "suraksha-squad.appspot.com",
  messagingSenderId: "953984437023",
  appId: "1:953984437023:web:4c2fa3bd330cc170ad7e2a",
  measurementId: "G-5R31PYTKWB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);
export { auth, provider, db };