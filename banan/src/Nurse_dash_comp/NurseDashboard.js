import React, { useState, useEffect } from 'react';

const NurseDashboard = () => {
    const [nurseData, setNurseData] = useState(null);
    const [patientData, setPatientData] = useState(null);
    const [patientId, setPatientId] = useState('');

    useEffect(() => {
        // Fetch nurse info on component mount
        fetch('/api/NurseDashboard.php?action=getNurseInfo')
            .then(response => response.json())
            .then(data => {
                if (!data.error) {
                    setNurseData(data);
                } else {
                    console.error('Error fetching nurse info:', data.error);
                }
            })
            .catch(error => console.error('Error fetching nurse info:', error));
    }, []);

    const handleScanFingerprint = () => {
        // Mock fingerprint scan action
        alert('Scanning fingerprint...');
        setPatientData({
            name: 'James Smith',
            age: 45,
            medicalConditions: 'Hypertension',
            medications: 'Lisinopril'
        });
    };

    const handleFetchPatientById = () => {
        if (patientId) {
            fetch(`/api/NurseDashboard.php?action=getPatientById&patientId=${patientId}`)
                .then(response => response.json())
                .then(data => {
                    if (!data.error) {
                        setPatientData(data);
                    } else {
                        alert(data.error);
                    }
                })
                .catch(error => console.error('Error fetching patient:', error));
        } else {
            alert('Please enter a valid Patient ID.');
        }
    };

    return (
        <div className="nurse-dashboard-container">
            <header>
                <img src="banan_logo.PNG" alt="Logo" />
                <h1>Nurse Dashboard</h1>
            </header>

            <div className="nurse-info-section">
                <div className="nurse-details">
                    {nurseData ? (
                        <>
                            <img src={nurseData.image || "nurse-image.png"} alt="Nurse" />
                            <p><strong>Nurse Name:</strong> {nurseData.nurseName}</p>
                            <p><strong>Hospital:</strong> {nurseData.hospitalName}</p>
                            <p><strong>License Number:</strong> {nurseData.licenseNumber}</p>
                            <p><strong>License Expiry:</strong> {nurseData.licenseExpiry}</p>
                        </>
                    ) : (
                        <p>Loading nurse information...</p>
                    )}
                </div>
            </div>

            <div className="patient-data-section">
                <h2>Patient Data</h2>
                {patientData ? (
                    <div>
                        <p><strong>Name:</strong> {patientData.name}</p>
                        <p><strong>Age:</strong> {patientData.age}</p>
                        <p><strong>Medical Conditions:</strong> {patientData.medicalConditions}</p>
                        <p><strong>Medications:</strong> {patientData.medications}</p>
                    </div>
                ) : (
                    <p>No patient data available. Scan fingerprint or enter ID to retrieve data.</p>
                )}

                {/* Fingerprint Scan Button */}
                <button onClick={handleScanFingerprint} className="scan-button">Scan Fingerprint</button>

                {/* Option to enter patient ID */}
                <div className="manual-id-input">
                    <input
                        type="text"
                        placeholder="Enter Patient ID"
                        value={patientId}
                        onChange={(e) => setPatientId(e.target.value)}
                    />
                    <button onClick={handleFetchPatientById}>Fetch Patient by ID</button>
                </div>
            </div>

            <div className="grid-layout">
                <div className="grid-item">
                    <h2>Recent Patient Visits</h2>
                    <p>No recent visits recorded.</p>
                </div>
                <div className="grid-item">
                    <h2>Medication Administration</h2>
                    <p>No medications administered recently.</p>
                </div>
            </div>
        </div>
    );
};

export default NurseDashboard;
