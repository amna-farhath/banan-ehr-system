import React from 'react';
import PatientDetails from './PatientDetails';
import { Link } from 'react-router-dom';
import './Dashboard.css'; 
import PatHeader from './PatHeader';
import PatFooter from './PatFooter';

const Patdashboard = () => {
    // Mock patient data
    const patient = {
        name: "John Doe",
        age: 30,
        gender: "Male",
        nationality: "American",
        id: "123456",
        image: "patient-image.png", // Placeholder image URL
        quickInfo: {
            bloodType: "O+",
            diseases: "Hypertension, Diabetes",
            allergies: "Penicillin"
        }
    };

    return (
        <div className="patdashboard-container">
            <PatHeader />
            
            <div className="patdashboard-patient-details-container">
                <PatientDetails patient={patient} />
            </div>

            <div className="patdashboard-grid">
                <div className="patdashboard-block">
                    <h2>Allergies</h2>
                    <p>{patient.quickInfo.allergies}</p>
                    <Link to="/allergies" className="patdashboard-link-button">View Allergies</Link>
                </div>

                <div className="patdashboard-block">
                    <h2>Prescriptions</h2>
                    <Link to="/prescriptions" className="patdashboard-link-button">View Prescriptions</Link>
                </div>

                <div className="patdashboard-block">
                    <h2>Emergencies</h2>
                    <Link to="/emergencies" className="patdashboard-link-button">View Emergencies</Link>
                </div>

                <div className="patdashboard-block">
                    <h2>Diseases</h2>
                    <p>{patient.quickInfo.diseases}</p>
                    <Link to="/diseases" className="patdashboard-link-button">View Disease History</Link>
                </div>

                <div className="patdashboard-block">
                    <h2>Appointments</h2>
                    <Link to="/PatAppointments" className="patdashboard-link-button">View Appointments</Link>
                </div>

                <div className="patdashboard-block">
                    <h2>Test Results</h2>
                    <Link to="/TestResult" className="patdashboard-link-button">View Test Results</Link>
                </div>
                <div className="patdashboard-block">
                    <h2>History</h2>
                    <Link to="/History" className="patdashboard-link-button">View History</Link>
                </div>
            </div>
            <PatFooter />
        </div>
    );
};

export default Patdashboard;
