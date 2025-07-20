// src/components/PatTestResults.js
import React from 'react';
import './PatientDetails.css';

const PatTestResults = () => {
    // Placeholder for loading state
    const loading = false; // Simulate loading state; replace with actual logic if needed

    return (
        <div className="test-results-container">
            <div className="content">
                <h2>Test Results</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <p>No test results available. Please check back later or contact your healthcare provider.</p>
                )}
            </div>
            <div className="contact-info">
                <a href="tel:+971-5677562334">
                    <img src="phone-icon.png" alt="Phone" /> +971-5677562334
                </a>
                <a href="mailto:ITSupport@reallygreatsite.com">
                    <img src="email-icon.png" alt="Email" /> ITSupport@reallygreatsite.com
                </a>
            </div>
        </div>
    );
};

export default PatTestResults;
