// src/components/RegisterPatientPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterPatientPage.css'; // Importing the CSS for this component

function RegisterPatientPage() {
  return (
    <div className="register-container">
      <h1>Welcome To UAE National EHR</h1>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/create">
          <button>Create Account</button>
        </Link>
      </div>
    </div>
  );
}

export default RegisterPatientPage;
