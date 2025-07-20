import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; // Importing the CSS for this component

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Mapping of usernames and passwords to their respective pages
  const userCredentials = {
    Academic: { password: 'acd12', page: '/academic-dashboard' },
    Ambulance: { password: 'dr12', page: '/ambulance-dashboard' },
    Patient: { password: 'pa12', page: '/Patdashboard' },
    Doctor: { password: 'dr12', page: '/DrDashboard' },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userCredentials[username] && userCredentials[username].password === password) {
      navigate(userCredentials[username].page);
    } else {
      alert('Invalid username or password');
    }
  };

  // Function to handle UAE PASS button click
  const handleUaePassClick = () => {
    window.location.href = 'https://ids.uaepass.ae/authenticationendpoint/login.do'; // Use window.location.href for external link
  };

  return (
    <div className="login-page-container">
      <h1>Login Page</h1>
      <form className="login-page-form" onSubmit={handleSubmit}>
        <div className="login-page-form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="login-page-form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="login-page-button-group">
          <button type="submit" className="login-page-btn login-page-btn-login">Login</button>
          <button type="button" className="login-page-btn login-page-btn-forgot">Forgot password</button>
        </div>
        <div className="uae-pass">
          <button type="button" className="login-page-btn login-page-btn-uae-pass" onClick={handleUaePassClick}>
            UAE PASS
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
