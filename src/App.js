import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lawyerdashboard from "./components/Lawyerdashboard";
import Lawyerform from "./components/Lawyerform";
import Home from "./components/Home";
import { db } from "./components/firebase";
import Login from "./components/screens/Login";
import Lawyerpage from "./components/Lawyerpage";
import Aibot from "./components/Ai-Leagal-decision/Aibot";

function App(){
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Lawyerdashboard" element={<Lawyerdashboard />} />
          <Route path="/Lawyerform" element={<Lawyerform db={db} />} />
          <Route path="/Lawyerpage" element={<Lawyerpage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
      <Aibot/>
    </>
  );
}

export default App;