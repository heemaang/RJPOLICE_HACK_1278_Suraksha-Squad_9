<<<<<<< HEAD
import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home';
=======
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lawyerform from './components/Lawyerform';
import Lawyerdashboard from './components/lawyerdashboard';
>>>>>>> 9a778f2f16637119f666a592572982d8889d0e33

export default function App() {
  return (
<<<<<<< HEAD
    <div>
      {/* <Navbar/> */}
      <Home/>
    </div>
  )
=======
    <>
    <Router>
      <Routes>

      <Route index element={<Lawyerform/>} />
      <Route path='/lawyerdashboard' element={<Lawyerdashboard />} />
      
      </Routes>
    </Router>
    </>
  );
>>>>>>> 9a778f2f16637119f666a592572982d8889d0e33
}
