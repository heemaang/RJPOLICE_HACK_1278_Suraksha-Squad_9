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
import Accordion from "./components/Accordion";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        <Route path="/accordion" element={<Accordion/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/footer" element={<Footer/>} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
