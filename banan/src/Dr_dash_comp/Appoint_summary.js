// src/doctor_dash_components/AppointmentsSummary.js
import React from 'react';
import Footer from '../components/Footer';
import PatHeader from './FrHeader';

const Appoint_summary = () => {
    // Mock data for appointments
    const appointments = [
        { time: '10:00 AM', patient: 'Jane Smith' },
        { time: '11:30 AM', patient: 'Michael Johnson' },
    ];

    return (
        <div>
            <h2>Upcoming Appointments</h2>
            <ul>
                {appointments.map((appointment, index) => (
                    <li key={index}>
                        {appointment.time} - {appointment.patient}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Appoint_summary;
