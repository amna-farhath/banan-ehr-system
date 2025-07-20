// src/components/PatTestResults.js
import React from 'react';
import PatHeader from './PatHeader';
import Footer from '../components/Footer';


const PatTestResults = () => {
    // Placeholder for loading state
    const loading = false; // Simulate loading state; replace with actual logic if needed

    return (
        <div className="test-results-container">
            <PatHeader /> 
            <div className="content">
                <h2>Test Results</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <p>No test results available. Please check back later or contact your healthcare provider.</p>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default PatTestResults;
