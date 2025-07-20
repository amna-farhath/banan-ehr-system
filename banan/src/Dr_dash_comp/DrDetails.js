// src/doctor_dash_components/DoctorDetails.js
import React from 'react';
import './DrDetails.css'; // Import the CSS for styling

const DrDetails = ({ doctor }) => {
    return (
        <div className="doctor-details-container">
            <img src={doctor.image} alt="Doctor" className="doctor-image" />
            <div className="doctor-info">
                <h2>Doctor Information</h2>
                <p><strong>Name:</strong> {doctor.name}</p>
                <p><strong>Hospital:</strong> {doctor.hospital}</p>
                <p><strong>Specialization:</strong> {doctor.specialization}</p>
                <p><strong>License Number:</strong> {doctor.licenseNumber}</p>
                <p><strong>License Expiry:</strong> {doctor.licenseExpiry}</p>
            </div>
        </div>
    );
};

export default DrDetails;
