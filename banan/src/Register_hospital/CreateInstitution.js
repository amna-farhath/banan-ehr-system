// In src/ImportantPages/CreateInstitution.js
import React, { useState } from 'react';
import './CreateInstitution.css'; // Import custom CSS
import Header from '../components/Header'; // Correct path to Header
import Footer from '../components/Footer'; // Correct path to Footer

function CreateInstitution() {
  // State variables to capture input data
  const [institutionName, setInstitutionName] = useState('');
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [hospitalUserId, setHospitalUserId] = useState('');
  const [licenseName, setLicenseName] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [licenseType, setLicenseType] = useState('');
  const [licenseExpiryDate, setLicenseExpiryDate] = useState('');
  const [hospitalLocation, setHospitalLocation] = useState('');
  const [hospitalLandline, setHospitalLandline] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle form submission, possibly send the data to an API
    alert(`Account creation initiated for ${institutionName}`);
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="main-content text-center my-5">
        <h2>Create Institution Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="institutionName">Institution Name</label>
            <input
              type="text"
              id="institutionName"
              className="form-control"
              value={institutionName}
              onChange={(e) => setInstitutionName(e.target.value)}
              placeholder="Enter institution name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="userId">User ID</label>
            <input
              type="number"
              id="userId"
              className="form-control"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter User ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hospitalUserId">Hospital User ID</label>
            <input
              type="number"
              id="hospitalUserId"
              className="form-control"
              value={hospitalUserId}
              onChange={(e) => setHospitalUserId(e.target.value)}
              placeholder="Enter Hospital User ID"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseName">License Name</label>
            <input
              type="text"
              id="licenseName"
              className="form-control"
              value={licenseName}
              onChange={(e) => setLicenseName(e.target.value)}
              placeholder="Enter license name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseNumber">License Number</label>
            <input
              type="text"
              id="licenseNumber"
              className="form-control"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              placeholder="Enter license number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseType">License Type</label>
            <input
              type="text"
              id="licenseType"
              className="form-control"
              value={licenseType}
              onChange={(e) => setLicenseType(e.target.value)}
              placeholder="Enter license type"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="licenseExpiryDate">License Expiry Date</label>
            <input
              type="date"
              id="licenseExpiryDate"
              className="form-control"
              value={licenseExpiryDate}
              onChange={(e) => setLicenseExpiryDate(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hospitalLocation">Hospital Location</label>
            <input
              type="text"
              id="hospitalLocation"
              className="form-control"
              value={hospitalLocation}
              onChange={(e) => setHospitalLocation(e.target.value)}
              placeholder="Enter hospital location"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="hospitalLandline">Hospital Landline Number</label>
            <input
              type="tel"
              id="hospitalLandline"
              className="form-control"
              value={hospitalLandline}
              onChange={(e) => setHospitalLandline(e.target.value)}
              placeholder="Enter hospital landline number"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              required
            />
          </div>

          <button type="submit" className="btn btn-primary my-3">Create Account</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateInstitution;
