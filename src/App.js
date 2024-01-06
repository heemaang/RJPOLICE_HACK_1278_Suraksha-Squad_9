// import React, { useEffect, useState } from "react";
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Lawyerdashboard from "./components/Lawyerdashboard";
import Lawyerform from "./components/Lawyerform";
import Home from "./components/Home";
// import { auth } from "./components/firebase";
import { db } from "./components/firebase";
import Login from "./components/screens/Login";
import Lawyerpage from "./components/Lawyerpage";
// import { Button } from 'semantic-ui-react';
// import ChatBot from 'react-simple-chatbot';
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
      {/* <div style={{ position: 'fixed', bottom: 20, right: 20 }}>
        <Button onClick={handleChatBotToggle} primary>
          <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="image" />
        </Button>
        {showChatBot && <ChatBotComponent />}
      </div> */}
    </>
  );
}

export default App;