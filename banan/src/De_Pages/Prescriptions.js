// src/pages/Prescriptions.js
import React, { useEffect, useState } from 'react';
import './Prescriptions.css';

const Prescriptions = () => {
    const [prescriptionData, setPrescriptionData] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [newMedication, setNewMedication] = useState({
        drugName: '',
        dailyDose: '',
        monthlyDose: '',
        quantity: '',
        startDate: '',
        endDate: '',
    });

    useEffect(() => {
        const sampleData = [
            { logDate: '2024-10-01', drugName: 'Aspirin', quantity: 30, dailyDose: '100mg', startDate: '2024-10-01', endDate: '2024-10-30', doctorId: 'D1234' },
            { logDate: '2024-09-15', drugName: 'Ibuprofen', quantity: 20, dailyDose: '200mg', startDate: '2024-09-15', endDate: '2024-09-30', doctorId: 'D5678' },
        ];
        setPrescriptionData(sampleData);
    }, []);

    const handleNewMedicationSubmit = () => {
        console.log("New Medication Added:", newMedication);
        setPrescriptionData([...prescriptionData, { ...newMedication, logDate: new Date().toISOString().split('T')[0] }]);
        setShowPopup(false);
        setNewMedication({ drugName: '', dailyDose: '', monthlyDose: '', quantity: '', startDate: '', endDate: '' });
    };

    return (
        <div className="prescriptions-dashboard">
            <h1>Prescriptions Dashboard</h1>

            <div className="request-button-container">
                <button className="request-medication-button" onClick={() => setShowPopup(true)}>
                    Add New Medication
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Log Date</th>
                        <th>Medication Name</th>
                        <th>Quantity</th>
                        <th>Daily Dose</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                        <th>Doctor ID</th>
                    </tr>
                </thead>
                <tbody>
                    {prescriptionData.map((prescription, index) => (
                        <tr key={index}>
                            <td>{prescription.logDate}</td>
                            <td>{prescription.drugName}</td>
                            <td>{prescription.quantity}</td>
                            <td>{prescription.dailyDose}</td>
                            <td>{prescription.startDate}</td>
                            <td>{prescription.endDate}</td>
                            <td>{prescription.doctorId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Add New Medication</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Drug Name</label>
                                <input
                                    type="text"
                                    value={newMedication.drugName}
                                    onChange={(e) => setNewMedication({ ...newMedication, drugName: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Daily Dose</label>
                                <input
                                    type="text"
                                    value={newMedication.dailyDose}
                                    onChange={(e) => setNewMedication({ ...newMedication, dailyDose: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Monthly Dose</label>
                                <input
                                    type="text"
                                    value={newMedication.monthlyDose}
                                    onChange={(e) => setNewMedication({ ...newMedication, monthlyDose: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Quantity</label>
                                <input
                                    type="number"
                                    value={newMedication.quantity}
                                    onChange={(e) => setNewMedication({ ...newMedication, quantity: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    value={newMedication.startDate}
                                    onChange={(e) => setNewMedication({ ...newMedication, startDate: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>End Date</label>
                                <input
                                    type="date"
                                    value={newMedication.endDate}
                                    onChange={(e) => setNewMedication({ ...newMedication, endDate: e.target.value })}
                                />
                            </div>

                            <div className="popup-buttons">
                                <button className="add-button" onClick={handleNewMedicationSubmit}>
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

export default Prescriptions;
