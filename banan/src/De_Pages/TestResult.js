import React, { useEffect, useState } from 'react';
import './TestResult.css'; // Create a CSS file for styles

const TestResult = () => {
    const [patientData] = useState({
        name: "Jane Doe",
        age: 29,
        id: "P987654",
    });

    const [testResults, setTestResults] = useState([]);
    const [activeTab, setActiveTab] = useState('chestXray'); // Default active tab
    const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility
    const [newTest, setNewTest] = useState({ testType: '', testReason: '', doctorNote: '' }); // Form data

    useEffect(() => {
        const sampleData = [
            { logDate: '2024-10-01', chestXray: 'Normal', mri: 'N/A', dexa: 'N/A', pft: 'Normal', urinalysis: 'Normal', bmp: 'Normal', crp: 'High', renal: 'Normal', colonoscopy: 'N/A', hospital: 'City Hospital', laboratory: 'Lab B' },
            { logDate: '2024-09-15', chestXray: 'High', mri: 'Normal', dexa: 'Normal', pft: 'N/A', urinalysis: 'Normal', bmp: 'Normal', crp: 'Normal', renal: 'Normal', colonoscopy: 'Normal', hospital: 'City Hospital', laboratory: 'Lab B' },
        ];
        setTestResults(sampleData);
    }, []);

    const handleNewTestSubmit = () => {
        console.log("New Test Requested:", newTest);
        setShowPopup(false);
        // Logic to send the request to a server or update the state
    };

    return (
        <div className="test-result-dashboard">
            <h1>Test Result Dashboard</h1>
            <div className="patient-details">
                <h2>Patient Details</h2>
                <p><strong>Name:</strong> {patientData.name}</p>
                <p><strong>Age:</strong> {patientData.age}</p>
                <p><strong>Patient ID:</strong> {patientData.id}</p>
            </div>

            <div className="tabs">
                <button onClick={() => setActiveTab('chestXray')}>Chest X-Ray</button>
                <button onClick={() => setActiveTab('mri')}>MRI</button>
                <button onClick={() => setActiveTab('dexa')}>DEXA</button>
                <button onClick={() => setActiveTab('pft')}>PFT</button>
                <button onClick={() => setActiveTab('urinalysis')}>Urinalysis</button>
                <button onClick={() => setActiveTab('bmp')}>BMP</button>
                <button onClick={() => setActiveTab('crp')}>CRP</button>
                <button onClick={() => setActiveTab('renal')}>Renal</button>
                <button onClick={() => setActiveTab('colonoscopy')}>Colonoscopy</button>
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
                            <td>{result.logDate}</td>
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
                        <h2>Test Request</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label>Test Type</label>
                                <select
                                    value={newTest.testType}
                                    onChange={(e) => setNewTest({ ...newTest, testType: e.target.value })}
                                >
                                    <option value="">Select Test</option>
                                    <option value="Chest X-Ray">Chest X-Ray</option>
                                    <option value="MRI">MRI</option>
                                    <option value="DEXA">DEXA</option>
                                    <option value="PFT">PFT</option>
                                    <option value="Urinalysis">Urinalysis</option>
                                    <option value="BMP">BMP</option>
                                    <option value="CRP">CRP</option>
                                    <option value="Renal">Renal</option>
                                    <option value="Colonoscopy">Colonoscopy</option>
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

export default TestResult;
