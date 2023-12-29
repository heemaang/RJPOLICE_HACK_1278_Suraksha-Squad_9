import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lawyerform from './components/Lawyerform';
import Lawyerdashboard from './components/lawyerdashboard';

function App() {
  return (
    <>
    <Router>
      <Routes>

      <Route index element={<Lawyerform/>} />
      <Route path='/lawyerdashboard' element={<Lawyerdashboard />} />
      
      </Routes>
    </Router>
    </>
  );
}

export default App;
