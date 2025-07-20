import React, { useEffect, useState } from 'react';
import './BloodTest.css';

const BloodTest = () => {
    const [patientData] = useState({
        name: "Jane Doe",
        age: 29,
        id: "P987654",
    });

    const [testResults, setTestResults] = useState([]);
    const [activeTab, setActiveTab] = useState('cbc');
    const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility
    const [newTest, setNewTest] = useState({ testType: '', testReason: '', doctorNote: '' }); // Form data

    useEffect(() => {
        const fetchTestResults = async () => {
            try {
                const response = await fetch('blood_test.php'); // Path to your PHP file
                if (!response.ok) throw new Error('Failed to fetch test results');
                const data = await response.json();
                setTestResults(data);
            } catch (error) {
                console.error('Error fetching test results:', error);
            }
        };

        fetchTestResults();
    }, []);

    const handleNewTestSubmit = () => {
        console.log("New Test Requested:", newTest);
        setShowPopup(false);
        // Here, you can add logic to send the request to a server or update the state
    };

    return (
        <div className="blood-test-dashboard">
            <h1>Blood Test Dashboard</h1>
            <div className="patient-details">
                <h2>Patient Details</h2>
                <p><strong>Name:</strong> {patientData.name}</p>
                <p><strong>Age:</strong> {patientData.age}</p>
                <p><strong>Patient ID:</strong> {patientData.id}</p>
            </div>

            <div className="tabs">
                <button onClick={() => setActiveTab('cbc')}>CBC</button>
                <button onClick={() => setActiveTab('lipidProfile')}>Lipid Profile</button>
                <button onClick={() => setActiveTab('bloodGlucose')}>Blood Glucose</button>
                <button onClick={() => setActiveTab('lft')}>LFT</button>
                <button onClick={() => setActiveTab('kft')}>KFT</button>
                <button onClick={() => setActiveTab('bun')}>BUN</button>
            </div>

            <div className="request-button-container">
                <button className="request-test-button" onClick={() => setShowPopup(true)}>
                    Request New Test
                </button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Log Date</th>
                        <th>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</th>
                        <th>Hospital</th>
                        <th>Laboratory</th>
                    </tr>
                </thead>
                <tbody>
                    {testResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.log_date}</td>
                            <td>{result[activeTab]}</td>
                            <td>{result.hospital}</td>
                            <td>{result.laboratory}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h2>Blood Test Request</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Test Type</label>
                                <select
                                    value={newTest.testType}
                                    onChange={(e) => setNewTest({ ...newTest, testType: e.target.value })}
                                >
                                    <option value="">Select Test</option>
                                    <option value="CBC">CBC</option>
                                    <option value="Lipid Profile">Lipid Profile</option>
                                    <option value="Blood Glucose">Blood Glucose</option>
                                    <option value="LFT">LFT</option>
                                    <option value="KFT">KFT</option>
                                    <option value="BUN">BUN</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Test Reason</label>
                                <textarea
                                    value={newTest.testReason}
                                    onChange={(e) => setNewTest({ ...newTest, testReason: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label>Doctor's Note</label>
                                <textarea
                                    value={newTest.doctorNote}
                                    onChange={(e) => setNewTest({ ...newTest, doctorNote: e.target.value })}
                                />
                            </div>

                            <div className="popup-buttons">
                                <button className="add-button" onClick={handleNewTestSubmit}>
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

export default BloodTest;
