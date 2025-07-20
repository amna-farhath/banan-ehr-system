import React, { useState } from 'react';
import './RevokeAccount.css'; // Use the updated CSS file

function RevokeAccount() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [reason, setReason] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account revocation request submitted");
        // Handle account revocation logic here, e.g., send data to a server
    };

    return (
        <div className="revoke-account-container">
            <div className="revoke-account-content">
                <h2>Revoke Account</h2>
                <form onSubmit={handleSubmit} className="revoke-account-form">
                    <div className="revoke-account-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                    <div className="revoke-account-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="revoke-account-group">
                        <label htmlFor="reason">Reason for Revocation:</label>
                        <textarea
                            id="reason"
                            name="reason"
                            value={reason}
                            onChange={(e) => setReason(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="revoke-account-button">Submit Request</button>
                </form>
            </div>
        </div>
    );
}

export default RevokeAccount;
