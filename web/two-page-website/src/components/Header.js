// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import logo from './BANAN.jpg'; // Import your existing image
import './Header.css'; // Add custom styles here

const Header = () => {
  return (
    <header>
      <img 
        src={logo}  // Use the imported logo
        alt="Banan Logo" 
      />
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/PatAppointments">Appointments</Link>
        <Link to="/PatientDetails">Patient Details</Link>
        <Link to="/PatTestResult">Test Results</Link>
      </nav>
    </header>
  );
};

export default Header;
