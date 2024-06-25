import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import Budget from './components/Budget';
import Investments from './components/Investments';
import './styles/App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/investments" element={<Investments />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
