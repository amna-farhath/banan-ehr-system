import React, { useState } from 'react';

const LaboratoryDashboard = () => {
    const [patientData, setPatientData] = useState(null);
    const [patientId, setPatientId] = useState('');

    // Mock laboratory data
    const lab = {
        labName: "City General Laboratory",
        labLicense: "LAB12345",
        labTechnicianName: "John Doe",
        licenseNumber: "LB12345",
        licenseExpiry: "2029-03-15",
        image: "lab-image.png",
    };

    const handleScanFingerprint = () => {
        alert('Scanning fingerprint...');
        // Assuming patient data is retrieved after fingerprint scan
        fetch(`/path/to/Laboratory.php?fingerprint=true`)
            .then(response => response.json())
            .then(data => setPatientData(data))
            .catch(error => console.error("Error fetching data:", error));
    };

    const handleFetchPatientById = () => {
        if (patientId) {
            fetch(`/path/to/Laboratory.php?patientId=${patientId}`)
                .then(response => response.json())
                .then(data => setPatientData(data))
                .catch(error => console.error("Error fetching data:", error));
        } else {
            alert('Please enter a valid Patient ID.');
        }
    };

    return (
        <div className="laboratory-dashboard-container">
            <header>
                <img src="banan_logo.PNG" alt="Logo" />
                <h1>Laboratory Dashboard</h1>
            </header>

            <div className="lab-info-section">
                <div className="lab-details">
                    <img src={lab.image} alt="Laboratory" />
                    <p><strong>Laboratory Name:</strong> {lab.labName}</p>
                    <p><strong>Technician Name:</strong> {lab.labTechnicianName}</p>
                    <p><strong>License Number:</strong> {lab.licenseNumber}</p>
                    <p><strong>License Expiry:</strong> {lab.licenseExpiry}</p>
                </div>
            </div>

            <div className="patient-data-section">
                <h2>Patient Test Data</h2>
                {patientData ? (
                    <div>
                        <p><strong>Name:</strong> {patientData.name}</p>
                        <p><strong>Age:</strong> {patientData.age}</p>
                        <p><strong>Test Results:</strong> {patientData.testResults}</p>
                        <p><strong>Next Test:</strong> {patientData.nextTest}</p>
                    </div>
                ) : (
                    <p>No patient data available. Scan fingerprint or enter ID to retrieve data.</p>
                )}

                <button onClick={handleScanFingerprint} className="scan-button">Scan Fingerprint</button>

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
                    <h2>Recent Lab Tests</h2>
                    <p>No recent lab tests recorded.</p>
                </div>
                <div className="grid-item">
                    <h2>Pending Tests</h2>
                    <p>No pending tests available.</p>
                </div>
            </div>
        </div>
    );
};

export default LaboratoryDashboard;
