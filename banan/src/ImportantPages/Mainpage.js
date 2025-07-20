// In src/ImportantPages/Mainpage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Mainpage.css'; // Custom CSS if needed
import Header from '../components/Header'; // Correct path to Header
import Footer from '../components/Footer'; // Correct path to Footer

function Mainpage() {
  return (
    <div className="container-fluid">
      <Header />
      {/* Main Content */}
      <div className="main-content text-center my-5">
        <h2>Welcome to Banan Health Portal</h2>
        <p>Your one-stop solution for managing health records and accessing healthcare services.</p>
        <div className="button-container">
          <Link to="/login">
            <button className="btn btn-primary mx-2">Front Line</button>
          </Link>
          <Link to="/register">
            <button className="btn btn-secondary mx-2">Patient</button>
          </Link>
          <Link to="/TestResult">
            <button className="btn btn-secondary mx-2">Institutions</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Mainpage;