// src/pharmacy_dash_components/PharmacyDashboard.js
import React, { useState } from 'react';
import './PharmacyDashboard.css';

const PharmacyDashboard = () => {
    const [patientData, setPatientData] = useState(null);
    const [patientId, setPatientId] = useState('');

    // Mock pharmacy data
    const pharmacy = {
        pharmacyName: "Health Plus Pharmacy",
        pharmacyLicense: "PHARM12345",
        pharmacistName: "Dr. Alice Johnson",
        licenseNumber: "PH98765",
        licenseExpiry: "2027-09-12",
        image: "pharmacy-image.png", // Placeholder image URL
    };

    const handleScanFingerprint = () => {
        // Mock fingerprint scan action
        alert('Scanning fingerprint...');
        setPatientData({
            name: 'John Doe',
            age: 30,
            prescriptions: 'Blood Pressure Medication, Insulin',
            allergies: 'Penicillin'
        });
    };

    const handleFetchPatientById = () => {
        // Mock fetch by patient ID
        if (patientId) {
            setPatientData({
                name: 'Jane Smith',
                age: 45,
                prescriptions: 'Vitamin D Supplements',
                allergies: 'None'
            });
        } else {
            alert('Please enter a valid Patient ID.');
        }
    };

    return (
        <div className="pharmacy-dashboard-container">
            <header>
                <img src="banan_logo.PNG" alt="Logo" />
                <h1>Pharmacy Dashboard</h1>
            </header>

            <div className="pharmacy-info-section">
                <div className="pharmacy-details">
                    <img src={pharmacy.image} alt="Pharmacy" />
                    <p><strong>Pharmacy Name:</strong> {pharmacy.pharmacyName}</p>
                    <p><strong>Pharmacist:</strong> {pharmacy.pharmacistName}</p>
                    <p><strong>License Number:</strong> {pharmacy.licenseNumber}</p>
                    <p><strong>License Expiry:</strong> {pharmacy.licenseExpiry}</p>
                </div>
            </div>

            <div className="patient-data-section">
                <h2>Patient Data</h2>
                {patientData ? (
                    <div>
                        <p><strong>Name:</strong> {patientData.name}</p>
                        <p><strong>Age:</strong> {patientData.age}</p>
                        <p><strong>Prescriptions:</strong> {patientData.prescriptions}</p>
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
                    <h2>Stock Overview</h2>
                    <p>No low stock items.</p>
                </div>
                <div className="grid-item">
                    <h2>Recent Prescriptions</h2>
                    <p>No recent prescriptions.</p>
                </div>
            </div>
        </div>
    );
};

export default PharmacyDashboard;
