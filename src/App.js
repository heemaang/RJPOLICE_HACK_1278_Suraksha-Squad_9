import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lawyerform from "./components/Lawyerform";
import Lawyerdashboard from "./components/Lawyerdashboard";
import Home from './components/Home';
import { auth } from "./components/firebase";
import { db } from './components/firebase';
import { doc, getDocs, collection, query } from 'firebase/firestore';
import Login from "./components/Login";
import Lawyerpage from "./components/Lawyerpage";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else {
        setUserName("");
      }
    });

    return () => unsubscribe();
  }, []); 

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Lawyerdashboard" element={<Lawyerdashboard/>} />
        <Route path="/Lawyerform" element={<Lawyerform db={db}/>} />
        <Route path="/Lawyerpage" element={<Lawyerpage/>} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
