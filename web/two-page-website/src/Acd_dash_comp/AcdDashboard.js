// src/academic_dash_components/AcademicDashboard.js
import React, { useState } from 'react';
//import './AcdDashboard.css';

const AcdDashboard = () => {
    const [studentData, setStudentData] = useState(null);
    const [studentId, setStudentId] = useState('');

    // Mock clinic data
    const clinic = {
        clinicName: "Academic Health Clinic",
        clinicLicense: "CLINIC12345",
        doctorName: "Dr. Mark Wilson",
        licenseNumber: "CL12345",
        licenseExpiry: "2028-06-10",
        image: "clinic-image.png", // Placeholder image URL
    };

    const handleScanFingerprint = () => {
        // Mock fingerprint scan action
        alert('Scanning fingerprint...');
        setStudentData({
            name: 'Emily Johnson',
            age: 16,
            medicalConditions: 'Asthma, Allergies',
            medications: 'Inhaler, Antihistamines'
        });
    };

    const handleFetchStudentById = () => {
        // Mock fetch by student ID
        if (studentId) {
            setStudentData({
                name: 'Michael Roberts',
                age: 18,
                medicalConditions: 'None',
                medications: 'None'
            });
        } else {
            alert('Please enter a valid Student ID.');
        }
    };

    return (
        <div className="academic-dashboard-container">
            <header>
                <img src="banan_logo.PNG" alt="Logo" />
                <h1>Academic Health Dashboard</h1>
            </header>

            <div className="clinic-info-section">
                <div className="clinic-details">
                    <img src={clinic.image} alt="Clinic" />
                    <p><strong>Clinic Name:</strong> {clinic.clinicName}</p>
                    <p><strong>Doctor:</strong> {clinic.doctorName}</p>
                    <p><strong>License Number:</strong> {clinic.licenseNumber}</p>
                    <p><strong>License Expiry:</strong> {clinic.licenseExpiry}</p>
                </div>
            </div>

            <div className="student-data-section">
                <h2>Student Data</h2>
                {studentData ? (
                    <div>
                        <p><strong>Name:</strong> {studentData.name}</p>
                        <p><strong>Age:</strong> {studentData.age}</p>
                        <p><strong>Medical Conditions:</strong> {studentData.medicalConditions}</p>
                        <p><strong>Medications:</strong> {studentData.medications}</p>
                    </div>
                ) : (
                    <p>No student data available. Scan fingerprint or enter ID to retrieve data.</p>
                )}

                {/* Fingerprint Scan Button */}
                <button onClick={handleScanFingerprint} className="scan-button">Scan Fingerprint</button>

                {/* Option to enter student ID */}
                <div className="manual-id-input">
                    <input
                        type="text"
                        placeholder="Enter Student ID"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                    />
                    <button onClick={handleFetchStudentById}>Fetch Student by ID</button>
                </div>
            </div>

            <div className="grid-layout">
                <div className="grid-item">
                    <h2>Recent Health Checkups</h2>
                    <p>No recent checkups.</p>
                </div>
                <div className="grid-item">
                    <h2>Vaccination Records</h2>
                    <p>No new vaccinations.</p>
                </div>
            </div>
        </div>
    );
};

export default AcdDashboard;
