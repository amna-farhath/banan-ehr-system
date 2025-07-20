// src/doctor_dash_components/PatientList.js
import React from 'react';
import Footer from '../components/Footer';
import PatHeader from './FrHeader';

const PatientList = () => {
    // Mock data for patients
    const patients = [
        { id: 1, name: 'Jane Smith', condition: 'Hypertension' },
        { id: 2, name: 'Michael Johnson', condition: 'Diabetes' },
        { id: 3, name: 'Alice Brown', condition: 'Asthma' },
    ];

    return (
        <div>
            <h2>Patient List</h2>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.id}>
                        {patient.name} - {patient.condition}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PatientList;
