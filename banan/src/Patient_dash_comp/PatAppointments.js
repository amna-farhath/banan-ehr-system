// src/components/PatAppointments.js
import React, { useState, useEffect } from 'react';
import PatHeader from './PatHeader';
import Footer from '../components/Footer';
import './PatAppointments.css';

const PatAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newAppointment, setNewAppointment] = useState({
        hospital: '',
        department: '',
        reason: '',
        date: '',
        time: ''
    });

    useEffect(() => {
        // Fetch appointments from the PHP backend on component mount
        fetch("http://localhost/path-to-your-php/appointments.php?action=getAppointments")
            .then(response => response.json())
            .then(data => setAppointments(data))
            .catch(error => console.error("Error fetching appointments:", error));
    }, []);

    const handleNewAppointmentSubmit = (e) => {
        e.preventDefault();
        fetch("http://localhost/path-to-your-php/appointments.php?action=addAppointment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAppointment)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            setAppointments([...appointments, newAppointment]);
            setShowPopup(false);
            setNewAppointment({ hospital: '', department: '', reason: '', date: '', time: '' });
        })
        .catch(error => console.error("Error booking appointment:", error));
    };

    const cancelAppointment = (id) => {
        fetch(`http://localhost/path-to-your-php/appointments.php?action=cancelAppointment&id=${id}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.message);
                setAppointments(appointments.map(app => app.id === id ? { ...app, status: 'Cancelled' } : app));
            })
            .catch(error => console.error("Error canceling appointment:", error));
    };

    const rescheduleAppointment = (id, newDate, newTime) => {
        fetch("http://localhost/path-to-your-php/appointments.php?action=rescheduleAppointment", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id, date: newDate, time: newTime })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.message);
            setAppointments(appointments.map(app => app.id === id ? { ...app, date: newDate, time: newTime } : app));
        })
        .catch(error => console.error("Error rescheduling appointment:", error));
    };

    return (
        <div className="appointments-dashboard">
            <PatHeader />
            <h1>Appointments Dashboard</h1>

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
                                        <button onClick={() => cancelAppointment(appointment.id)}>Cancel</button>
                                        <button onClick={() => rescheduleAppointment(appointment.id, '2024-10-20', '11:00 AM')}>Reschedule</button>
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
                                <select value={newAppointment.hospital} onChange={(e) => setNewAppointment({ ...newAppointment, hospital: e.target.value })}>
                                    <option value="">Select Hospital</option>
                                    <option value="City Hospital">City Hospital</option>
                                    <option value="Green Clinic">Green Clinic</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Department</label>
                                <select value={newAppointment.department} onChange={(e) => setNewAppointment({ ...newAppointment, department: e.target.value })}>
                                    <option value="">Select Department</option>
                                    <option value="Cardiology">Cardiology</option>
                                    <option value="Orthopedics">Orthopedics</option>
                                    <option value="Dermatology">Dermatology</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Reason for Visit</label>
                                <input type="text" value={newAppointment.reason} onChange={(e) => setNewAppointment({ ...newAppointment, reason: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Date</label>
                                <input type="date" value={newAppointment.date} onChange={(e) => setNewAppointment({ ...newAppointment, date: e.target.value })} />
                            </div>
                            <div className="form-group">
                                <label>Time</label>
                                <input type="time" value={newAppointment.time} onChange={(e) => setNewAppointment({ ...newAppointment, time: e.target.value })} />
                            </div>
                            <div className="popup-buttons">
                                <button type="submit" className="add-button">Add</button>
                                <button type="button" className="cancel-button" onClick={() => setShowPopup(false)}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default PatAppointments;
