import React, { useState } from 'react';
import DoctorDetails from './DrDetails';
import PatientList from './PatientList';
import AppointmentsSummary from './Appoint_summary';
import PatHeader from './FrHeader';
import Footer from '../components/Footer';
import './DrDetails.css';

const DrDashboard = () => {
    const [patientData, setPatientData] = useState(null);
    const [patientId, setPatientId] = useState('');

    // Function to fetch patient data by ID
    const handleFetchById = async () => {
        try {
            const response = await fetch('http://localhost/your_project/DoctorDashboard.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    patient_id: patientId
                })
            });
            const data = await response.json();
            setPatientData(data);
        } catch (error) {
            console.error('Error fetching patient data:', error);
        }
    };

    return (
        <div className="doctor-dashboard-container">
            <header>
                <img src="banan_logo.PNG" alt="Logo" />
                <h1>Doctor Dashboard</h1>
            </header>

            <div className="doctor-info-section">
                {/* Example Doctor Details */}
                <DoctorDetails doctor={{ 
                    name: "Dr. John Smith", 
                    hospital: "City Hospital", 
                    specialization: "Cardiology" 
                }} />
            </div>

            {/* Enter Patient ID and Fetch Data */}
            <div className="patient-id-input">
                <input
                    type="text"
                    value={patientId}
                    onChange={(e) => setPatientId(e.target.value)}
                    placeholder="Enter Patient ID"
                />
                <button onClick={handleFetchById}>Fetch Patient</button>
            </div>

            {/* Display Fetched Patient Data */}
            {patientData && (
                <div className="patient-details-section">
                    <h2>Patient Details</h2>
                    {patientData.error ? (
                        <p>{patientData.error}</p>
                    ) : (
                        <>
                            <p><strong>Name:</strong> {patientData.name}</p>
                            <p><strong>Age:</strong> {patientData.age}</p>
                            <p><strong>Condition:</strong> {patientData.condition}</p>
                            <p><strong>Nationality:</strong> {patientData.nationality}</p>
                            <p><strong>Gender:</strong> {patientData.gender}</p>
                            <p><strong>ID:</strong> {patientData.patient_id}</p>
                        </>
                    )}
                </div>
            )}

            <div className="grid-layout">
                <div className="grid-item">
                    <PatientList />
                </div>
                <div className="grid-item">
                    <AppointmentsSummary />
                </div>
            </div>
        </div>
    );
};

export default DrDashboard;
