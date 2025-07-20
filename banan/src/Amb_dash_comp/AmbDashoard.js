// src/ambulance_dash_components/AmbulanceDashboard.js
import React, { useState } from 'react';
//import './AmbDashboard.css';



const AmbDashboard = () => {
    const [patientData, setPatientData] = useState(null);
    const [patientId, setPatientId] = useState('');

    // Mock ambulance data
    const ambulance = {
        hospitalName: "City Hospital",
        hospitalLicense: "HOSP12345",
        carPlate: "ABC-1234",
        licenseNumber: "AMB98765",
        licenseExpiry: "2026-08-15",
        image: "ambulance-image.png", // Placeholder image URL
    };

    const handleScanFingerprint = () => {
        // Mock fingerprint scan action
        // In a real-world scenario, integrate with a fingerprint scanning API
        alert('Scanning fingerprint...');
        setPatientData({
            name: 'John Doe',
            age: 30,
            bloodType: 'O+',
            allergies: 'Penicillin'
        });
    };

    const handleFetchPatientById = () => {
        // Mock fetch by patient ID
        if (patientId) {
            setPatientData({
                name: 'Jane Smith',
                age: 45,
                bloodType: 'A+',
                allergies: 'None'
            });
        } else {
            alert('Please enter a valid Patient ID.');
        }
    };

    return (
        <div className="ambulance-dashboard-container">
            <header>
                <img src="banan_logo.PNG" alt="Logo" />
                <h1>Ambulance Dashboard</h1>
            </header>

            <div className="ambulance-info-section">
                <div className="ambulance-details">
                    <img src={ambulance.image} alt="Ambulance" />
                    <p><strong>Hospital Name:</strong> {ambulance.hospitalName}</p>
                    <p><strong>Hospital License:</strong> {ambulance.hospitalLicense}</p>
                    <p><strong>Car Plate:</strong> {ambulance.carPlate}</p>
                    <p><strong>License Number:</strong> {ambulance.licenseNumber}</p>
                    <p><strong>License Expiry:</strong> {ambulance.licenseExpiry}</p>
                </div>
            </div>

            <div className="patient-data-section">
                <h2>Patient Data</h2>
                {patientData ? (
                    <div>
                        <p><strong>Name:</strong> {patientData.name}</p>
                        <p><strong>Age:</strong> {patientData.age}</p>
                        <p><strong>Blood Type:</strong> {patientData.bloodType}</p>
                        <p><strong>Allergies:</strong> {patientData.allergies}</p>
                    </div>
                ) : (
                    <p>No patient data available. Scan fingerprint or enter ID to retrieve data.</p>
                )}

                {/* Fingerprint Scan Button */}
                <button onClick={handleScanFingerprint} className="scan-button">Scan Fingerprint</button>

                {/* Option to enter patient ID */}
                <div className="manual-id-input">
                    <input
                        type="text"
                        placeholder="Enter Patient ID"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                    />
                    <button onClick={handleFetchPatientById}>Fetch Patient by ID</button>
                </div>
            </div>

            <div className="grid-layout">
                <div className="grid-item">
                    <h2>Vehicle Check History</h2>
                    <p>No recent checks.</p>
                </div>
                <div className="grid-item">
                    <h2>Emergency Calls</h2>
                    <p>No new emergency calls.</p>
                </div>
            </div>
        </div>
    );
};

export default AmbDashboard;
