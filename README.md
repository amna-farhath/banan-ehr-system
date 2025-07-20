# 🩺 Fingerprint-Based Electronic Health Record (EHR) System

A secure, institution-controlled EHR web application that allows healthcare providers to retrieve patient medical records using either fingerprint scanning or UAE ID number. This project is designed for use in hospitals, clinics, ambulances, laboratories, pharmacies, and academic health centers.

---

## 📌 Features

- 🔐 Login system for institution users (doctor, nurse, lab, pharmacy, ambulance, academic)
- 🧬 Fingerprint-based patient identification (via simulated input or file upload)
- 🪪 UAE ID-based record lookup as fallback
- 🗂️ Modular dashboards for different user types
- 🧾 View and manage patient data:
  - Personal Information  
  - Allergies  
  - Diseases  
  - Prescriptions  
  - Appointments  
  - Lab Tests & Blood Tests  
  - Emergency History  
- 🧾 SQL database with foreign key constraints
- 📤 PHP-based backend for CRUD operations
- 🌐 Simple frontend built with HTML, CSS, and JS

---

## 🗂 Project Structure

    Fingerprint-EHR-System/
    ├── web/
    │   ├── index.html
    │   ├── login/
    │   ├── dashboards/
    │   ├── components/
    │   ├── css/
    │   └── js/
    │
    ├── api/
    │   ├── connection/
    │   │   └── local_db.php
    │   ├── endpoints/
    │   │   ├── get_patient_info.php
    │   │   ├── insert_patient.php
    │   │   ├── update_allergies.php
    │   │   └── ...
    │
    ├── sql/
    │   ├── banandb.sql
    │   ├── create_tables.sql
    │   └── sample_data.sql
    │
    └── README.md

---

## 🛠️ Technologies Used

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP (XAMPP)  
- **Database:** MySQL (phpMyAdmin)  
- **Authentication:** Token-based 
- **Biometric Data:** Simulated fingerprint hash (SHA-256)

---

