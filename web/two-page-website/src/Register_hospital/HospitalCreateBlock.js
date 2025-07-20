import React from 'react';
import { Link } from 'react-router-dom';
import './HospitalCreateBlock.css'; // Custom CSS if needed

function HospitalCreateBlock() {
  return (
    <div className="container-fluid">
      <div className="main-content text-center my-5">
        
        <h2>Welcome to Banan Health Portal</h2>

        <div className="button-container">
          <Link to="/SelectUser">
            <button className="btn btn-primary mx-2">Create Account Request</button>
          </Link>
          
          <Link to="/RevokeAccount">
            <button className="btn btn-secondary mx-2"> Revoke Account Access Request</button>
          </Link>
        </div>
      </div>

    </div>
  );
}

export default HospitalCreateBlock;
