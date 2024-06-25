import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Dashboard.scss';

function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <p>Welcome to your personal finance dashboard.</p>
      <div className="button-container">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/signup">
          <button>Signup</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
