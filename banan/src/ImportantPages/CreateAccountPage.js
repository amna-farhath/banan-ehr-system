import React, { useState } from 'react';
import './CreateAccountPage.css'; // Assuming CSS is named CreateAccountPage.css
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

const CreateAccountPage = () => {
    const navigate = useNavigate(); // Hook to programmatically navigate
    const [formData, setFormData] = useState({
        firstName: '',
        middleName: '',
        lastName: '',
        dateOfBirth: '',
        nationality: '',
        gender: '',
        address1: '',
        address2: '',
        emirate: '',
        idNumber: '',
        idExpiry: '',
        passportNumber: '',
        passportExpiry: '',
        phone1: '',
        phone2: '',
        emergencyContactPhone: '',
        emergencyContactName: '',
        emergencyContactRelation: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [successMessage, setSuccessMessage] = useState(false); // State for success message

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        console.log(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        
        // Show success message
        setSuccessMessage(true);
        
        // Redirect to RegisterPatientPage after 2 seconds
        setTimeout(() => {
            navigate('/register'); // Use navigate instead of history.push
        }, 2000);
    };

    // Function to handle UAE PASS Auto Fill button click
    const handleUaePassClick = () => {
        window.location.href = 'https://ids.uaepass.ae/authenticationendpoint/login.do'; // Redirect to UAE PASS login
    };

    return (
        <div className="create-account-page">
            <h1>Create Account</h1>

            <button onClick={handleUaePassClick}>UAE Pass Auto Fill</button>
            <h2>Create Account Manually</h2>

            {successMessage && (
                <div className="success-message">
                    <p>Account created successfully!</p>
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Middle Name</label>
                    <input type="text" name="middleName" value={formData.middleName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Upload Personal Photo</label>
                    <input type="file" name="personalPhoto" onChange={handleFileChange} />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Nationality</label>
                    <input type="text" name="nationality" value={formData.nationality} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Address 1</label>
                    <input type="text" name="address1" value={formData.address1} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Address 2</label>
                    <input type="text" name="address2" value={formData.address2} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Emirate</label>
                    <input type="text" name="emirate" value={formData.emirate} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>ID Number</label>
                    <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>ID Expiry</label>
                    <input type="date" name="idExpiry" value={formData.idExpiry} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Upload ID Front</label>
                    <input type="file" name="idFront" onChange={handleFileChange} />
                </div>

                <div className="form-group">
                    <label>Upload ID Back</label>
                    <input type="file" name="idBack" onChange={handleFileChange} />
                </div>

                <div className="form-group">
                    <label>Passport Number</label>
                    <input type="text" name="passportNumber" value={formData.passportNumber} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Passport Expiry</label>
                    <input type="date" name="passportExpiry" value={formData.passportExpiry} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Phone Number 1</label>
                    <input type="text" name="phone1" value={formData.phone1} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Phone Number 2</label>
                    <input type="text" name="phone2" value={formData.phone2} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Emergency Contact Phone Number</label>
                    <input type="text" name="emergencyContactPhone" value={formData.emergencyContactPhone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Emergency Contact Name</label>
                    <input type="text" name="emergencyContactName" value={formData.emergencyContactName} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Emergency Contact Relation</label>
                    <input type="text" name="emergencyContactRelation" value={formData.emergencyContactRelation} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                </div>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default CreateAccountPage;
