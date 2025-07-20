import React, { useState } from 'react';
import './HospitalCreateBlock.css';

function SelectUser() {
    const [userType, setUserType] = useState('Doctor');
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dob: '',
        nationality: '',
        gender: '',
        idNumber: '',
        passportNumber: '',
        phone1: '',
        phone2: '',
        email: '',
    });
    const [files, setFiles] = useState({
        idFront: null,
        idBack: null,
        passportFront: null,
        passportBack: null,
        personalPhoto: null,
        otherDocuments: null,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFiles((prevFiles) => ({ ...prevFiles, [name]: files[0] }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account creation requested");
        // Handle form submission logic here, e.g., send formData and files to a server
    };

    return (
        <div className="container-fluid">
            <div className="main-content">
                <h2>{userType} Account Creation</h2>
                <form onSubmit={handleSubmit} className="create-user-form">
                    <div className="form-group">
                        <label htmlFor="userType">User Type:</label>
                        <select
                            id="userType"
                            name="userType"
                            value={userType}
                            onChange={(e) => setUserType(e.target.value)}
                            required
                        >
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Pharmacy">Pharmacy</option>
                            <option value="Ambulance">Ambulance</option>
                            <option value="Laboratory">Laboratory</option>
                        </select>
                    </div>

                    {/* Name Fields */}
                    <div className="form-group">
                        <label htmlFor="firstName">{userType} First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="middleName">Middle Name:</label>
                        <input
                            type="text"
                            id="middleName"
                            name="middleName"
                            value={formData.middleName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">{userType} Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* Other Fields */}
                    <div className="form-group">
                        <label htmlFor="dob">Date of Birth:</label>
                        <input
                            type="date"
                            id="dob"
                            name="dob"
                            value={formData.dob}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="nationality">Nationality:</label>
                        <select
                            id="nationality"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Nationality</option>
                            {/* Add all nationalities here */}
                            <option value="American">American</option>
                            <option value="Canadian">Canadian</option>
                            {/* ... */}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="gender">Gender:</label>
                        <select
                            id="gender"
                            name="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="idNumber">ID Number:</label>
                        <input
                            type="text"
                            id="idNumber"
                            name="idNumber"
                            value={formData.idNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* File Uploads */}
                    <div className="form-group">
                        <label htmlFor="idFront">Upload ID Front:</label>
                        <input
                            type="file"
                            id="idFront"
                            name="idFront"
                            onChange={handleFileChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="idBack">Upload ID Back:</label>
                        <input
                            type="file"
                            id="idBack"
                            name="idBack"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passportNumber">Passport Number:</label>
                        <input
                            type="text"
                            id="passportNumber"
                            name="passportNumber"
                            value={formData.passportNumber}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="passportFront">Upload Passport Front:</label>
                        <input
                            type="file"
                            id="passportFront"
                            name="passportFront"
                            onChange={handleFileChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passportBack">Upload Passport Back:</label>
                        <input
                            type="file"
                            id="passportBack"
                            name="passportBack"
                            onChange={handleFileChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone1">Phone Number 1:</label>
                        <input
                            type="tel"
                            id="phone1"
                            name="phone1"
                            value={formData.phone1}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone2">Phone Number 2:</label>
                        <input
                            type="tel"
                            id="phone2"
                            name="phone2"
                            value={formData.phone2}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    {/* New Fields for Personal Photo and Other Documents */}
                    <div className="form-group">
                        <label htmlFor="personalPhoto">Upload Personal Photo:</label>
                        <input
                            type="file"
                            id="personalPhoto"
                            name="personalPhoto"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="otherDocuments">Upload Other Documents:</label>
                        <input
                            type="file"
                            id="otherDocuments"
                            name="otherDocuments"
                            onChange={handleFileChange}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Create Account</button>
                </form>
            </div>
        </div>
    );
}

export default SelectUser;
  