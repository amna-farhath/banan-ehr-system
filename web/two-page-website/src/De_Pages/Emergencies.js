import React, { useState, useEffect } from 'react';
import './Emergencies.css';

const Emergencies = () => {
    const [emergencyData, setEmergencyData] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility
    const [newEmergency, setNewEmergency] = useState({
        type: '',
        date: '',
        severity: '',
        hospital: '',
        doctorID: '',
        status: '',
    });

    useEffect(() => {
        const sampleData = [
            {
                type: 'Heart Attack',
                date: '2024-10-01',
                severity: 'High',
                hospital: 'City Hospital',
                doctorID: 'D123456',
                status: 'Treated',
            },
            {
                type: 'Car Accident',
                date: '2024-09-28',
                severity: 'Critical',
                hospital: 'General Hospital',
                doctorID: 'D789012',
                status: 'In Progress',
            },
        ];
        setEmergencyData(sampleData);
    }, []);

    const handleNewEmergencySubmit = () => {
        console.log('New Emergency Case Added:', newEmergency);
        setShowPopup(false);
        // Logic to update state or send data to a server
    };

    return (
        <div className="emergencies-dashboard">
            <h1>Emergency Cases</h1>

            <div className="emergency-button-container">
                <button className="add-emergency-button" onClick={() => setShowPopup(true)}>
                    Add New Emergency
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Date</th>
                        <th>Severity</th>
                        <th>Hospital</th>
                        <th>Doctor ID</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {emergencyData.map((emergency, index) => (
                        <tr key={index}>
                            <td>{emergency.type}</td>
                            <td>{emergency.date}</td>
                            <td>{emergency.severity}</td>
                            <td>{emergency.hospital}</td>
                            <td>{emergency.doctorID}</td>
                            <td>{emergency.status}</td>
                            <td>
                                <button className="edit-button">Edit</button>
                                <button className="view-button">View</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Add Emergency Case</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Emergency Type</label>
                                <input
                                    type="text"
                                    value={newEmergency.type}
                                    onChange={(e) => setNewEmergency({ ...newEmergency, type: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Date</label>
                                <input
                                    type="date"
                                    value={newEmergency.date}
                                    onChange={(e) => setNewEmergency({ ...newEmergency, date: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Severity</label>
                                <select
                                    value={newEmergency.severity}
                                    onChange={(e) => setNewEmergency({ ...newEmergency, severity: e.target.value })}
                                    required
                                >
                                    <option value="">Select Severity</option>
                                    <option value="Low">Low</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="High">High</option>
                                    <option value="Critical">Critical</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Hospital</label>
                                <input
                                    type="text"
                                    value={newEmergency.hospital}
                                    onChange={(e) => setNewEmergency({ ...newEmergency, hospital: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Doctor ID</label>
                                <input
                                    type="text"
                                    value={newEmergency.doctorID}
                                    onChange={(e) => setNewEmergency({ ...newEmergency, doctorID: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    value={newEmergency.status}
                                    onChange={(e) => setNewEmergency({ ...newEmergency, status: e.target.value })}
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Treated">Treated</option>
                                    <option value="Pending">Pending</option>
                                </select>
                            </div>

                            <div className="popup-buttons">
                                <button className="add-button" onClick={handleNewEmergencySubmit}>
                                    Add
                                </button>
                                <button className="cancel-button" onClick={() => setShowPopup(false)}>
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

export default Emergencies;
