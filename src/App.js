import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Lawyerform from './components/Lawyerform';
// import Lawyerdashboard from './components/Lawyerdashboard';
import Home from './components/Home';
import { auth } from "./components/firebase";
import Login from "./components/Login";

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
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/lawyerdashboard" element={<Lawyerdashboard />} /> */}
        {/* <Route path="/lawyerform" element={<Lawyerform />} /> */}
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
