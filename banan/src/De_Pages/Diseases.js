// src/pages/Diseases.js
import React, { useState, useEffect } from 'react';
import './Diseases.css'; // Create a CSS file for styling

const Diseases = () => {
    const [diseases, setDiseases] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [isEdit, setIsEdit] = useState(false); // To determine if it's an edit or add popup
    const [currentDisease, setCurrentDisease] = useState(null); // Disease to edit
    const [newDisease, setNewDisease] = useState({
        diseaseName: '',
        icdCode: '',
        onsetDate: '',
        status: '',
        notes: '',
        hospital: '',
        did: '',
        treatmentNote: '',
        labResults: ''
    });

    useEffect(() => {
        // Sample disease data
        const sampleData = [
            { diseaseName: 'Hypertension', icdCode: 'I10', onsetDate: '2020-05-01', status: 'Chronic', notes: 'Patient on medication', hospital: 'City Hospital', did: 'D12345', treatmentNote: 'Taking meds', labResults: 'Blood pressure normal' },
            { diseaseName: 'Diabetes', icdCode: 'E11', onsetDate: '2019-08-10', status: 'Under Control', notes: 'On insulin', hospital: 'Green Clinic', did: 'D54321', treatmentNote: 'Taking insulin', labResults: 'Glucose levels stable' },
        ];
        setDiseases(sampleData);
    }, []);

    const handleNewDiseaseSubmit = () => {
        console.log(isEdit ? "Edited Disease" : "New Disease", newDisease);
        setShowPopup(false);
        // Logic to handle adding/editing disease, e.g., send to server or update state
    };

    const openPopup = (disease = null) => {
        setIsEdit(!!disease); // Set to edit mode if a disease is passed in
        setCurrentDisease(disease);
        if (disease) {
            setNewDisease(disease); // Fill the form with existing data for edit
        } else {
            setNewDisease({
                diseaseName: '',
                icdCode: '',
                onsetDate: '',
                status: '',
                notes: '',
                hospital: '',
                did: '',
                treatmentNote: '',
                labResults: ''
            });
        }
        setShowPopup(true);
    };

    return (
        <div className="diseases-dashboard">
            <h1>Patient Disease History</h1>

            <div className="disease-button-container">
                <button className="add-disease-button" onClick={() => openPopup()}>
                    Add New Disease
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Disease Name</th>
                        <th>ICD Code</th>
                        <th>Onset Date</th>
                        <th>Status</th>
                        <th>Notes</th>
                        <th>Hospital</th>
                        <th>DID</th>
                        <th>Treatment Note</th>
                        <th>Lab Results</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {diseases.map((disease, index) => (
                        <tr key={index}>
                            <td>{disease.diseaseName}</td>
                            <td>{disease.icdCode}</td>
                            <td>{disease.onsetDate}</td>
                            <td>{disease.status}</td>
                            <td>{disease.notes}</td>
                            <td>{disease.hospital}</td>
                            <td>{disease.did}</td>
                            <td>{disease.treatmentNote}</td>
                            <td>{disease.labResults}</td>
                            <td>
                                <button onClick={() => openPopup(disease)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>{isEdit ? 'Edit Disease' : 'Add New Disease'}</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Disease Name</label>
                                <input
                                    type="text"
                                    value={newDisease.diseaseName}
                                    onChange={(e) => setNewDisease({ ...newDisease, diseaseName: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>ICD Code</label>
                                <input
                                    type="text"
                                    value={newDisease.icdCode}
                                    onChange={(e) => setNewDisease({ ...newDisease, icdCode: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Onset Date</label>
                                <input
                                    type="date"
                                    value={newDisease.onsetDate}
                                    onChange={(e) => setNewDisease({ ...newDisease, onsetDate: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Status</label>
                                <input
                                    type="text"
                                    value={newDisease.status}
                                    onChange={(e) => setNewDisease({ ...newDisease, status: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Notes</label>
                                <textarea
                                    value={newDisease.notes}
                                    onChange={(e) => setNewDisease({ ...newDisease, notes: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Hospital</label>
                                <input
                                    type="text"
                                    value={newDisease.hospital}
                                    onChange={(e) => setNewDisease({ ...newDisease, hospital: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>DID</label>
                                <input
                                    type="text"
                                    value={newDisease.did}
                                    onChange={(e) => setNewDisease({ ...newDisease, did: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Treatment Note</label>
                                <textarea
                                    value={newDisease.treatmentNote}
                                    onChange={(e) => setNewDisease({ ...newDisease, treatmentNote: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Lab Results</label>
                                <textarea
                                    value={newDisease.labResults}
                                    onChange={(e) => setNewDisease({ ...newDisease, labResults: e.target.value })}
                                />
                            </div>

                            <div className="popup-buttons">
                                <button className="add-button" onClick={handleNewDiseaseSubmit}>
                                    {isEdit ? 'Update' : 'Add'}
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

export default Diseases;
