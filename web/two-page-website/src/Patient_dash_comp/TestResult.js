import React, { useEffect, useState } from 'react';

const TestResult = () => {
    const [activeTab, setActiveTab] = useState('chestXray');
    const [showPopup, setShowPopup] = useState(false);
    const [newTest, setNewTest] = useState({ testType: '', testReason: '', doctorNote: '' });
    const [testResults, setTestResults] = useState([]);

    // Fetch test results on component load
    useEffect(() => {
        fetch('http://your-server-url/test.php?action=getTestResults')
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error("Error fetching test results:", data.error);
                } else {
                    setTestResults(data);
                }
            })
            .catch(error => console.error("Network error:", error));
    }, []);

    // Handle form submission for new test request
    const handleNewTestSubmit = () => {
        fetch('http://your-server-url/test.php?action=addTestRequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTest),
        })
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error("Error adding test request:", data.error);
                } else {
                    console.log(data.message);
                    setShowPopup(false);
                }
            })
            .catch(error => console.error("Network error:", error));
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial" }}>
            <h2>Patient Test Results</h2>

            {/* Tabs for selecting test type */}
            <div style={{ marginBottom: "10px" }}>
                {["chestXray", "mri"].map(test => (
                    <button key={test} onClick={() => setActiveTab(test)}>{test.toUpperCase()}</button>
                ))}
            </div>

            {/* Button to open new test request popup */}
            <button onClick={() => setShowPopup(true)}>Request New Test</button>

            {/* Table for displaying test results */}
            <table border="1" cellPadding="8" style={{ marginTop: "10px", width: "100%" }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>{activeTab.toUpperCase()}</th>
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
                            <td>{result.lab}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* New Test Request Popup */}
            {showPopup && (
                <div style={{
                    position: "fixed", top: "0", left: "0", right: "0", bottom: "0",
                    backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center"
                }}>
                    <div style={{ background: "white", padding: "20px", borderRadius: "8px", width: "300px" }}>
                        <h3>Request New Test</h3>
                        <label>Type:</label>
                        <select
                            value={newTest.testType}
                            onChange={(e) => setNewTest({ ...newTest, testType: e.target.value })}
                            style={{ width: "100%", marginBottom: "8px" }}
                        >
                            <option value="">Select Type</option>
                            <option value="Chest X-Ray">Chest X-Ray</option>
                            <option value="MRI">MRI</option>
                        </select>
                        <label>Reason:</label>
                        <textarea
                            value={newTest.testReason}
                            onChange={(e) => setNewTest({ ...newTest, testReason: e.target.value })}
                            style={{ width: "100%", marginBottom: "8px" }}
                        />
                        <button onClick={handleNewTestSubmit}>Add</button>
                        <button onClick={() => setShowPopup(false)} style={{ marginLeft: "8px" }}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestResult;
