import React from 'react';
import './App.css';
import Login from './pages/login/login.tsx';
import Home from './pages/home/home.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/home' element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
