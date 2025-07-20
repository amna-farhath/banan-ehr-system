import React, { useState, useEffect } from 'react';
import './Appointments.css'; // Ensure this file exists

const AppointmentsDe = () => {
    const [appointments, setAppointments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newAppointment, setNewAppointment] = useState({
        hospital: '',
        department: '',
        reason: '',
        date: '',
        time: ''
    });
    const [error, setError] = useState('');

    useEffect(() => {
        fetchAppointments();
    }, []);

    const fetchAppointments = async () => {
        try {
            const response = await fetch('appointments.php'); // Update with the correct path
            if (!response.ok) throw new Error('Failed to fetch appointments');
            const data = await response.json();
            setAppointments(data);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleNewAppointmentSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        try {
            const response = await fetch('appointments.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(newAppointment)
            });

            if (!response.ok) throw new Error('Failed to book appointment');
            await response.json(); // Process the response
            setShowPopup(false);
            fetchAppointments(); // Refresh appointments list
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="appointments-dashboard">
            <h1>Appointments Dashboard</h1>
            {error && <p className="error">{error}</p>} {/* Display error message */}

            <div className="appointment-button-container">
                <button className="book-appointment-button" onClick={() => setShowPopup(true)}>
                    Book Appointment
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Log Date</th>
                        <th>Appointment Date</th>
                        <th>Appointment Time</th>
                        <th>Doctor</th>
                        <th>Status</th>
                        <th>Hospital</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {appointments.map((appointment, index) => (
                        <tr key={index}>
                            <td>{appointment.logDate}</td>
                            <td>{appointment.appointmentDate}</td>
                            <td>{appointment.appointmentTime}</td>
                            <td>{appointment.doctor}</td>
                            <td>{appointment.status}</td>
                            <td>{appointment.hospital}</td>
                            <td>
                                {appointment.status === 'Scheduled' ? (
                                    <>
                                        <button onClick={() => alert('Cancel Appointment')}>Cancel</button>
                                        <button onClick={() => alert('Reschedule Appointment')}>Reschedule</button>
                                    </>
                                ) : (
                                    <button onClick={() => alert('Show More Details')}>Show More</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Book an Appointment</h2>
                        <form onSubmit={handleNewAppointmentSubmit}>
                            <div className="form-group">
                                <label>Hospital</label>
                                <select
                                    value={newAppointment.hospital}
                                    onChange={(e) => setNewAppointment({ ...newAppointment, hospital: e.target.value })}
                                >
                                    <option value="">Select Hospital</option>
                                    <option value="City Hospital">City Hospital</option>
                                    <option value="Green Clinic">Green Clinic</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Department</label>
                                <select
                                    value={newAppointment.department}
                                    onChange={(e) => setNewAppointment({ ...newAppointment, department: e.target.value })}
                                >
                                    <option value="">Select Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Dermatology">Dermatology</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Reason for Visit</label>
                                <input
                                    type="text"
                                    value={newAppointment.reason}
                                    onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    value={newAppointment.date}
                                    onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Time</label>
                                <input
                                    type="time"
                                    value={newAppointment.time}
                                    onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })}
                                />
                            </div>

                            <div className="popup-buttons">
                                <button type="submit" className="add-button">
                                    Add
                                </button>
                                <button type="button" className="cancel-button" onClick={() => setShowPopup(false)}>
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AppointmentsDe;
