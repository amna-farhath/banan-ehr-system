import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../BANAN.jpg';
import './PatHeader.css'; // Keep the external CSS file

const PatHeader = () => {
  const location = useLocation();

  // Define links to display based on current path
  const links = [
    { path: "/register", label: "Register" },
    { path: "/login", label: "Login" },
    { path: "/PatAppointments", label: "Appointments" },
    { path: "/Patdashboard", label: "Home" },
    { path: "/TestResult", label: "Test Results" },
    { path: "/History", label: "History" }
  ]; 

  return (
    <header className="header">
      <nav className="navbar">
        <img 
          src={logo} 
          alt="Banan Logo" 
          className="logo" 
        />
        <div className="nav-links">
          {links
            .filter(link => link.path !== location.pathname) // Filter out the link of the current path
            .map(link => (
              <Link 
                key={link.path} 
                to={link.path} 
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
        </div>
      </nav>
    </header>
  );
};

export default PatHeader;
