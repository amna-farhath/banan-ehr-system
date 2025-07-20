// src/components/quickInfoTable.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


const quickInfoTable = ({ quickInfo }) => (
    <div>
        <Header />
        <h2>Quick Info</h2>
        <table>
            <thead>
                <tr>
                    <th>Blood Type</th>
                    <th>Diseases</th>
                    <th>Allergies</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{quickInfo.bloodType}</td>
                    <td>{quickInfo.diseases}</td>
                    <td>{quickInfo.allergies}</td>
                </tr>
            </tbody>
        </table>
        <Footer />
    </div>
);

export default quickInfoTable;
