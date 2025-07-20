import React, { useState, useEffect } from 'react';
import './Allergies.css';

const Allergies = () => {
    const [allergyData, setAllergyData] = useState([]);
    const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility
    const [newAllergy, setNewAllergy] = useState({
        type: '',
        onsetDate: '',
        severity: '',
        reaction: '',
        status: '',
        hospital: '',
        doctorID: '',
    });

    useEffect(() => {
        const sampleData = [
            {
                type: 'Peanuts',
                onsetDate: '2023-08-15',
                severity: 'Severe',
                reaction: 'Anaphylaxis',
                status: 'Active',
                hospital: 'City Hospital',
                doctorID: 'D123456',
            },
            {
                type: 'Pollen',
                onsetDate: '2022-05-10',
                severity: 'Moderate',
                reaction: 'Sneezing',
                status: 'Resolved',
                hospital: 'General Clinic',
                doctorID: 'D654321',
            },
        ];
        setAllergyData(sampleData);
    }, []);

    const handleNewAllergySubmit = () => {
        console.log('New Allergy Added:', newAllergy);
        setShowPopup(false);
        // Logic to update state or send data to a server
    };

    return (
        <div className="allergies-dashboard">
            <h1>Allergy Records</h1>

            <div className="allergy-button-container">
                <button className="add-allergy-button" onClick={() => setShowPopup(true)}>
                    Add New Allergy
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Allergy Type</th>
                        <th>Onset Date</th>
                        <th>Severity</th>
                        <th>Reaction</th>
                        <th>Status</th>
                        <th>Hospital</th>
                        <th>Doctor ID</th>
                    </tr>
                </thead>
                <tbody>
                    {allergyData.map((allergy, index) => (
                        <tr key={index}>
                            <td>{allergy.type}</td>
                            <td>{allergy.onsetDate}</td>
                            <td>{allergy.severity}</td>
                            <td>{allergy.reaction}</td>
                            <td>{allergy.status}</td>
                            <td>{allergy.hospital}</td>
                            <td>{allergy.doctorID}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Add New Allergy</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Allergy Type</label>
                                <input
                                    type="text"
                                    value={newAllergy.type}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, type: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Onset Date</label>
                                <input
                                    type="date"
                                    value={newAllergy.onsetDate}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, onsetDate: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Severity</label>
                                <select
                                    value={newAllergy.severity}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, severity: e.target.value })}
                                    required
                                >
                                    <option value="">Select Severity</option>
                                    <option value="Mild">Mild</option>
                                    <option value="Moderate">Moderate</option>
                                    <option value="Severe">Severe</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Reaction</label>
                                <input
                                    type="text"
                                    value={newAllergy.reaction}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, reaction: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Status</label>
                                <select
                                    value={newAllergy.status}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, status: e.target.value })}
                                    required
                                >
                                    <option value="">Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Resolved">Resolved</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Hospital</label>
                                <input
                                    type="text"
                                    value={newAllergy.hospital}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, hospital: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label>Doctor ID</label>
                                <input
                                    type="text"
                                    value={newAllergy.doctorID}
                                    onChange={(e) => setNewAllergy({ ...newAllergy, doctorID: e.target.value })}
                                    required
                                />
                            </div>

                            <div className="popup-buttons">
                                <button className="add-button" onClick={handleNewAllergySubmit}>
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

export default Allergies;
