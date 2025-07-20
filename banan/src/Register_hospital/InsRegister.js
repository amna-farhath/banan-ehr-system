// src/components/InsRegister.js
import React from 'react';
import { Link } from 'react-router-dom';
import './InsRegister.css'; // Importing the CSS for this component

function InsRegister() {
  return (
    <div className="register-container">
      <h1>Welcome To UAE National EHR</h1>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/CreateInstitution">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default InsRegister;
