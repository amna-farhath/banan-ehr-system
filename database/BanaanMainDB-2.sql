-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Oct 29, 2024 at 12:33 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BanaanMainDB`
--

-- --------------------------------------------------------

--
-- Table structure for table `Academic`
--

CREATE TABLE `Academic` (
  `Academic_User_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Academic_Personal_Info`
--

CREATE TABLE `Academic_Personal_Info` (
  `Academic_User_Info_ID` int(11) NOT NULL,
  `Academic_User_ID` int(11) DEFAULT NULL,
  `Academic_Level` varchar(100) DEFAULT NULL,
  `Landline_Number` varchar(15) DEFAULT NULL,
  `Branch_Number` int(11) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Allergies`
--

CREATE TABLE `Allergies` (
  `Allergy_ID` int(11) NOT NULL,
  `Allergy_Name` varchar(255) DEFAULT NULL,
  `Status` varchar(100) DEFAULT NULL,
  `Severity` varchar(100) DEFAULT NULL,
  `Reaction` varchar(255) DEFAULT NULL,
  `Doctor_Notes` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ambulance_Report`
--

CREATE TABLE `Ambulance_Report` (
  `Ambulance_Report_ID` int(11) NOT NULL,
  `Ambulance_Vehicle_ID` int(11) DEFAULT NULL,
  `Log_Date` date DEFAULT NULL,
  `Type_Of_Emergency` text DEFAULT NULL,
  `Description` text DEFAULT NULL,
  `Action_Taken_Report` text DEFAULT NULL,
  `Paramedic_Name` varchar(255) DEFAULT NULL,
  `Phone_Number` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Ambulance_Vehicle_Info`
--

CREATE TABLE `Ambulance_Vehicle_Info` (
  `Ambulance_Vehicle_ID` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) NOT NULL,
  `Hospital_User_ID` int(11) NOT NULL,
  `Car_Plate_Number` varchar(15) DEFAULT NULL,
  `Car_Plate_Emirate` varchar(50) DEFAULT NULL,
  `Car_Plate_Code` varchar(10) DEFAULT NULL,
  `Registration_Number` varchar(20) DEFAULT NULL,
  `Registration_Expiry_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Appointments`
--

CREATE TABLE `Appointments` (
  `Appointment_ID` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) NOT NULL,
  `Hospital_User_ID` int(11) NOT NULL,
  `Log_Date` timestamp NOT NULL DEFAULT current_timestamp(),
  `Appointment_Date` date DEFAULT NULL,
  `Appointment_Time` time DEFAULT NULL,
  `Doctor_Name` varchar(255) DEFAULT NULL,
  `Status` varchar(50) DEFAULT NULL,
  `Hospital` varchar(255) DEFAULT NULL,
  `Action_Taken` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Blood_Test_Results`
--

CREATE TABLE `Blood_Test_Results` (
  `Blood_Test_ID` int(11) NOT NULL,
  `Lab_Result_ID` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) NOT NULL,
  `log_date_auto` timestamp NOT NULL DEFAULT current_timestamp(),
  `Blood_Type` varchar(3) DEFAULT NULL,
  `CBC` varchar(255) DEFAULT NULL,
  `Lipid_Profile` varchar(255) DEFAULT NULL,
  `Blood_Glucose_Test` varchar(255) DEFAULT NULL,
  `LFT` varchar(255) DEFAULT NULL,
  `KFT` varchar(255) DEFAULT NULL,
  `BUN` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Diseases`
--

CREATE TABLE `Diseases` (
  `Disease_ID` int(11) NOT NULL,
  `Hospital_User_ID` int(11) DEFAULT NULL,
  `Patient_Uae_ID` int(11) DEFAULT NULL,
  `Laboratory_ID` int(11) DEFAULT NULL,
  `Allergy_ID` int(11) DEFAULT NULL,
  `ICD_Code` int(11) DEFAULT NULL,
  `Disease_Name` varchar(255) DEFAULT NULL,
  `Disease_Description` text DEFAULT NULL,
  `Date_Diagnosed` date DEFAULT NULL,
  `Date_Recovered` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Extra_Medical_Reports`
--

CREATE TABLE `Extra_Medical_Reports` (
  `Extra_Medical_Reports_ID` int(11) NOT NULL,
  `Sick_Leave_Certificates` text DEFAULT NULL,
  `Travel_Health_Certificates` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Hospital`
--

CREATE TABLE `Hospital` (
  `Hospital_User_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Hospital_1st_Line_Info`
--

CREATE TABLE `Hospital_1st_Line_Info` (
  `Hospital_Info_ID` int(11) NOT NULL,
  `Hospital_User_ID` int(11) DEFAULT NULL,
  `FirstName` varchar(255) DEFAULT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) DEFAULT NULL,
  `Date_Of_Birth` date DEFAULT NULL,
  `Nationality` varchar(100) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Specialization` varchar(255) DEFAULT NULL,
  `Phone_Number1` varchar(15) DEFAULT NULL,
  `Job_Description` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Hospital_Details`
--

CREATE TABLE `Hospital_Details` (
  `Hospital_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `Hospital_Location` varchar(255) DEFAULT NULL,
  `Hospital_Landline_Number` int(11) DEFAULT NULL,
  `Branch_Number` int(11) DEFAULT NULL,
  `Emirate` varchar(100) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Hospital_Users_Emergency_Contact`
--

CREATE TABLE `Hospital_Users_Emergency_Contact` (
  `Contact_ID` int(11) NOT NULL,
  `Hospital_Info_ID` int(11) DEFAULT NULL,
  `Emergency_Contact_Phone_Number` varchar(15) DEFAULT NULL,
  `Emergency_Contact_Name` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Institutions_Users`
--

CREATE TABLE `Institutions_Users` (
  `User_ID` int(11) NOT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Institution_Media`
--

CREATE TABLE `Institution_Media` (
  `Media_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `Personal_Photo_Path` varchar(255) DEFAULT NULL,
  `Uae_ID_Front_Path` varchar(255) DEFAULT NULL,
  `Uae_ID_Back_Path` varchar(255) DEFAULT NULL,
  `Passport_Page1_Path` varchar(255) DEFAULT NULL,
  `Passport_Page2_Path` varchar(255) DEFAULT NULL,
  `License_Photo_Path` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Laboratory`
--

CREATE TABLE `Laboratory` (
  `Laboratory_ID` int(11) NOT NULL,
  `Hospital_User_ID` int(11) DEFAULT NULL,
  `Laboratory_Name` varchar(255) DEFAULT NULL,
  `Laboratory_Phone_Number` varchar(15) DEFAULT NULL,
  `Laboratory_Location` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Lab_Results`
--

CREATE TABLE `Lab_Results` (
  `Lab_Result_ID` int(11) NOT NULL,
  `Laboratory_ID` int(11) DEFAULT NULL,
  `Patient_Uae_ID` int(11) DEFAULT NULL,
  `Test_Type` varchar(255) DEFAULT NULL,
  `Test_Result_Date` varchar(50) DEFAULT NULL,
  `Test_Result_Details` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `License_Info`
--

CREATE TABLE `License_Info` (
  `License_ID` int(11) NOT NULL,
  `User_ID` int(11) DEFAULT NULL,
  `Media_ID` int(11) DEFAULT NULL,
  `Hospital_User_ID` int(11) DEFAULT NULL,
  `Academic_User_ID` int(11) DEFAULT NULL,
  `License_Name` varchar(255) DEFAULT NULL,
  `License_Number` varchar(100) DEFAULT NULL,
  `License_Type` varchar(100) DEFAULT NULL,
  `License_Expiry_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Medical_Reports`
--

CREATE TABLE `Medical_Reports` (
  `Report_ID` int(11) NOT NULL,
  `Laboratory_ID` int(11) NOT NULL,
  `Extra_Medical_Reports` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) NOT NULL,
  `Surgeries` text DEFAULT NULL,
  `Laboratory_Reports` text DEFAULT NULL,
  `Immunization` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Patient`
--

CREATE TABLE `Patient` (
  `Patient_UAE_ID` int(11) NOT NULL,
  `Password` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Patient_Contact_Info_And_Address`
--

CREATE TABLE `Patient_Contact_Info_And_Address` (
  `Patient_Contact_Address_ID` int(11) NOT NULL,
  `Patient_Info_ID` int(11) DEFAULT NULL,
  `Emergency_Contact_Number` varchar(15) DEFAULT NULL,
  `Emergency_Contact_Name` varchar(255) DEFAULT NULL,
  `Emergency_Contact_Relation` varchar(100) DEFAULT NULL,
  `Address_1` varchar(255) DEFAULT NULL,
  `Address_2` varchar(255) DEFAULT NULL,
  `Emirate` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Patient_Diseases_History`
--

CREATE TABLE `Patient_Diseases_History` (
  `Start_Date` date NOT NULL,
  `Disease_ID` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) NOT NULL,
  `Lab_Result_ID` int(11) NOT NULL,
  `Hospital_User_ID` int(11) NOT NULL,
  `Disease_Status` varchar(255) DEFAULT NULL,
  `Treatment_Note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Patient_Personal_Info`
--

CREATE TABLE `Patient_Personal_Info` (
  `Patient_Info_ID` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) DEFAULT NULL,
  `First_Name` varchar(255) DEFAULT NULL,
  `Middle_Name` varchar(255) DEFAULT NULL,
  `Last_Name` varchar(255) DEFAULT NULL,
  `Date_Of_Birth` date DEFAULT NULL,
  `Nationality` varchar(100) DEFAULT NULL,
  `Gender` varchar(50) DEFAULT NULL,
  `Uae_ID_Number` varchar(50) DEFAULT NULL,
  `Uae_ID_Expiry_Date` date DEFAULT NULL,
  `Patient_Phone_Number` varchar(15) DEFAULT NULL,
  `Uae_ID_Photo_Path` int(11) DEFAULT NULL,
  `Insurance_Name` varchar(255) DEFAULT NULL,
  `Insurance_Photo_Path` int(11) DEFAULT NULL,
  `Insurance_Expiry_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Prescriptions`
--

CREATE TABLE `Prescriptions` (
  `Prescription_ID` int(11) NOT NULL,
  `Patient_Uae_ID` int(11) DEFAULT NULL,
  `Hospital_User_ID` int(11) DEFAULT NULL,
  `Medication_Name` varchar(255) DEFAULT NULL,
  `Qty` int(11) DEFAULT NULL,
  `Daily_Doses` int(11) DEFAULT NULL,
  `Monthly_Doses` int(11) DEFAULT NULL,
  `Start_Date` date DEFAULT NULL,
  `End_Date` date DEFAULT NULL,
  `Hospital_Name` varchar(255) DEFAULT NULL,
  `Doctor_Name` varchar(255) DEFAULT NULL,
  `Log_Date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `price`) VALUES
(1, 'Laptop', 999.99),
(2, 'Smartphone', 499.99);

-- --------------------------------------------------------

--
-- Table structure for table `productss`
--

CREATE TABLE `productss` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Test_Results`
--

CREATE TABLE `Test_Results` (
  `Test_Results_ID` int(11) NOT NULL,
  `Lab_Result_ID` int(11) DEFAULT NULL,
  `Patient_Uae_ID` int(11) DEFAULT NULL,
  `Chest_Xray` varchar(255) DEFAULT NULL,
  `MRI` varchar(255) DEFAULT NULL,
  `Dexa` varchar(255) DEFAULT NULL,
  `DFT` varchar(255) DEFAULT NULL,
  `Urinalysis` varchar(255) DEFAULT NULL,
  `BMP` varchar(255) DEFAULT NULL,
  `CRP` varchar(255) DEFAULT NULL,
  `Renal` varchar(255) DEFAULT NULL,
  `Colonoscopy` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Universal_Diseases_Table`
--

CREATE TABLE `Universal_Diseases_Table` (
  `ICD_Code` varchar(255) NOT NULL,
  `Disease_Name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Academic`
--
ALTER TABLE `Academic`
  ADD PRIMARY KEY (`Academic_User_ID`);

--
-- Indexes for table `Academic_Personal_Info`
--
ALTER TABLE `Academic_Personal_Info`
  ADD PRIMARY KEY (`Academic_User_Info_ID`);

--
-- Indexes for table `Allergies`
--
ALTER TABLE `Allergies`
  ADD PRIMARY KEY (`Allergy_ID`);

--
-- Indexes for table `Ambulance_Report`
--
ALTER TABLE `Ambulance_Report`
  ADD PRIMARY KEY (`Ambulance_Report_ID`);

--
-- Indexes for table `Ambulance_Vehicle_Info`
--
ALTER TABLE `Ambulance_Vehicle_Info`
  ADD PRIMARY KEY (`Ambulance_Vehicle_ID`);

--
-- Indexes for table `Appointments`
--
ALTER TABLE `Appointments`
  ADD PRIMARY KEY (`Appointment_ID`);

--
-- Indexes for table `Blood_Test_Results`
--
ALTER TABLE `Blood_Test_Results`
  ADD PRIMARY KEY (`Blood_Test_ID`),
  ADD KEY `Lab_Result_ID` (`Lab_Result_ID`);

--
-- Indexes for table `Diseases`
--
ALTER TABLE `Diseases`
  ADD PRIMARY KEY (`Disease_ID`);

--
-- Indexes for table `Extra_Medical_Reports`
--
ALTER TABLE `Extra_Medical_Reports`
  ADD PRIMARY KEY (`Extra_Medical_Reports_ID`);

--
-- Indexes for table `Hospital`
--
ALTER TABLE `Hospital`
  ADD PRIMARY KEY (`Hospital_User_ID`);

--
-- Indexes for table `Hospital_1st_Line_Info`
--
ALTER TABLE `Hospital_1st_Line_Info`
  ADD PRIMARY KEY (`Hospital_Info_ID`);

--
-- Indexes for table `Hospital_Details`
--
ALTER TABLE `Hospital_Details`
  ADD PRIMARY KEY (`Hospital_ID`);

--
-- Indexes for table `Hospital_Users_Emergency_Contact`
--
ALTER TABLE `Hospital_Users_Emergency_Contact`
  ADD PRIMARY KEY (`Contact_ID`);

--
-- Indexes for table `Institutions_Users`
--
ALTER TABLE `Institutions_Users`
  ADD PRIMARY KEY (`User_ID`);

--
-- Indexes for table `Institution_Media`
--
ALTER TABLE `Institution_Media`
  ADD PRIMARY KEY (`Media_ID`);

--
-- Indexes for table `Laboratory`
--
ALTER TABLE `Laboratory`
  ADD PRIMARY KEY (`Laboratory_ID`);

--
-- Indexes for table `Lab_Results`
--
ALTER TABLE `Lab_Results`
  ADD PRIMARY KEY (`Lab_Result_ID`);

--
-- Indexes for table `License_Info`
--
ALTER TABLE `License_Info`
  ADD PRIMARY KEY (`License_ID`);

--
-- Indexes for table `Medical_Reports`
--
ALTER TABLE `Medical_Reports`
  ADD PRIMARY KEY (`Report_ID`);

--
-- Indexes for table `Patient`
--
ALTER TABLE `Patient`
  ADD PRIMARY KEY (`Patient_UAE_ID`);

--
-- Indexes for table `Patient_Contact_Info_And_Address`
--
ALTER TABLE `Patient_Contact_Info_And_Address`
  ADD PRIMARY KEY (`Patient_Contact_Address_ID`);

--
-- Indexes for table `Patient_Diseases_History`
--
ALTER TABLE `Patient_Diseases_History`
  ADD PRIMARY KEY (`Start_Date`) USING BTREE,
  ADD KEY `Disease_ID` (`Disease_ID`),
  ADD KEY `Patient_Uae_ID` (`Patient_Uae_ID`),
  ADD KEY `Hospital_User_ID` (`Hospital_User_ID`),
  ADD KEY `Lab_Result_ID` (`Lab_Result_ID`);

--
-- Indexes for table `Patient_Personal_Info`
--
ALTER TABLE `Patient_Personal_Info`
  ADD PRIMARY KEY (`Patient_Info_ID`);

--
-- Indexes for table `Prescriptions`
--
ALTER TABLE `Prescriptions`
  ADD PRIMARY KEY (`Prescription_ID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `productss`
--
ALTER TABLE `productss`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Test_Results`
--
ALTER TABLE `Test_Results`
  ADD PRIMARY KEY (`Test_Results_ID`);

--
-- Indexes for table `Universal_Diseases_Table`
--
ALTER TABLE `Universal_Diseases_Table`
  ADD PRIMARY KEY (`ICD_Code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Ambulance_Vehicle_Info`
--
ALTER TABLE `Ambulance_Vehicle_Info`
  MODIFY `Ambulance_Vehicle_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Appointments`
--
ALTER TABLE `Appointments`
  MODIFY `Appointment_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Blood_Test_Results`
--
ALTER TABLE `Blood_Test_Results`
  MODIFY `Blood_Test_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `Medical_Reports`
--
ALTER TABLE `Medical_Reports`
  MODIFY `Report_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `productss`
--
ALTER TABLE `productss`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Academic`
--
ALTER TABLE `Academic`
  ADD CONSTRAINT `academic_ibfk_1` FOREIGN KEY (`Academic_User_ID`) REFERENCES `Institutions_Users` (`User_ID`),
  ADD CONSTRAINT `academic_ibfk_2` FOREIGN KEY (`Academic_User_ID`) REFERENCES `Academic_Personal_Info` (`Academic_User_Info_ID`);

--
-- Constraints for table `Allergies`
--
ALTER TABLE `Allergies`
  ADD CONSTRAINT `allergies_ibfk_1` FOREIGN KEY (`Allergy_ID`) REFERENCES `Diseases` (`Disease_ID`);

--
-- Constraints for table `Ambulance_Vehicle_Info`
--
ALTER TABLE `Ambulance_Vehicle_Info`
  ADD CONSTRAINT `ambulance_vehicle_info_ibfk_1` FOREIGN KEY (`Ambulance_Vehicle_ID`) REFERENCES `Ambulance_Report` (`Ambulance_Report_ID`);

--
-- Constraints for table `Blood_Test_Results`
--
ALTER TABLE `Blood_Test_Results`
  ADD CONSTRAINT `blood_test_results_ibfk_1` FOREIGN KEY (`Lab_Result_ID`) REFERENCES `Lab_Results` (`Lab_Result_ID`),
  ADD CONSTRAINT `fk_Blood_Test_Lab_Result_ID` FOREIGN KEY (`Lab_Result_ID`) REFERENCES `Lab_Results` (`Lab_Result_ID`);

--
-- Constraints for table `Extra_Medical_Reports`
--
ALTER TABLE `Extra_Medical_Reports`
  ADD CONSTRAINT `extra_medical_reports_ibfk_1` FOREIGN KEY (`Extra_Medical_Reports_ID`) REFERENCES `Medical_Reports` (`Report_ID`);

--
-- Constraints for table `Hospital`
--
ALTER TABLE `Hospital`
  ADD CONSTRAINT `hospital_ibfk_1` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Ambulance_Vehicle_Info` (`Ambulance_Vehicle_ID`),
  ADD CONSTRAINT `hospital_ibfk_2` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Diseases` (`Disease_ID`),
  ADD CONSTRAINT `hospital_ibfk_3` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Prescriptions` (`Prescription_ID`),
  ADD CONSTRAINT `hospital_ibfk_4` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Appointments` (`Appointment_ID`),
  ADD CONSTRAINT `hospital_ibfk_5` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Laboratory` (`Laboratory_ID`),
  ADD CONSTRAINT `hospital_ibfk_6` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Hospital_1st_Line_Info` (`Hospital_Info_ID`),
  ADD CONSTRAINT `hospital_ibfk_7` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `License_Info` (`License_ID`);

--
-- Constraints for table `Hospital_1st_Line_Info`
--
ALTER TABLE `Hospital_1st_Line_Info`
  ADD CONSTRAINT `hospital_1st_line_info_ibfk_1` FOREIGN KEY (`Hospital_Info_ID`) REFERENCES `Hospital_Users_Emergency_Contact` (`Contact_ID`);

--
-- Constraints for table `Institutions_Users`
--
ALTER TABLE `Institutions_Users`
  ADD CONSTRAINT `institutions_users_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `License_Info` (`License_ID`),
  ADD CONSTRAINT `institutions_users_ibfk_2` FOREIGN KEY (`User_ID`) REFERENCES `Institution_Media` (`Media_ID`),
  ADD CONSTRAINT `institutions_users_ibfk_3` FOREIGN KEY (`User_ID`) REFERENCES `Academic` (`Academic_User_ID`),
  ADD CONSTRAINT `institutions_users_ibfk_4` FOREIGN KEY (`User_ID`) REFERENCES `Hospital` (`Hospital_User_ID`),
  ADD CONSTRAINT `institutions_users_ibfk_5` FOREIGN KEY (`User_ID`) REFERENCES `Hospital_Details` (`Hospital_ID`);

--
-- Constraints for table `Institution_Media`
--
ALTER TABLE `Institution_Media`
  ADD CONSTRAINT `institution_media_ibfk_1` FOREIGN KEY (`Media_ID`) REFERENCES `Institutions_Users` (`User_ID`);

--
-- Constraints for table `Laboratory`
--
ALTER TABLE `Laboratory`
  ADD CONSTRAINT `laboratory_ibfk_1` FOREIGN KEY (`Laboratory_ID`) REFERENCES `Lab_Results` (`Lab_Result_ID`),
  ADD CONSTRAINT `laboratory_ibfk_2` FOREIGN KEY (`Laboratory_ID`) REFERENCES `Medical_Reports` (`Report_ID`),
  ADD CONSTRAINT `laboratory_ibfk_3` FOREIGN KEY (`Laboratory_ID`) REFERENCES `Diseases` (`Disease_ID`);

--
-- Constraints for table `Lab_Results`
--
ALTER TABLE `Lab_Results`
  ADD CONSTRAINT `lab_results_ibfk_1` FOREIGN KEY (`Lab_Result_ID`) REFERENCES `Test_Results` (`Test_Results_ID`),
  ADD CONSTRAINT `lab_results_ibfk_2` FOREIGN KEY (`Lab_Result_ID`) REFERENCES `Blood_Test_Results` (`Blood_Test_ID`);

--
-- Constraints for table `Patient`
--
ALTER TABLE `Patient`
  ADD CONSTRAINT `patient_ibfk_1` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Patient_Personal_Info` (`Patient_Info_ID`),
  ADD CONSTRAINT `patient_ibfk_2` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Test_Results` (`Test_Results_ID`),
  ADD CONSTRAINT `patient_ibfk_3` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Blood_Test_Results` (`Blood_Test_ID`),
  ADD CONSTRAINT `patient_ibfk_4` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Lab_Results` (`Lab_Result_ID`),
  ADD CONSTRAINT `patient_ibfk_5` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Appointments` (`Appointment_ID`),
  ADD CONSTRAINT `patient_ibfk_6` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Medical_Reports` (`Report_ID`),
  ADD CONSTRAINT `patient_ibfk_7` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Prescriptions` (`Prescription_ID`),
  ADD CONSTRAINT `patient_ibfk_8` FOREIGN KEY (`Patient_UAE_ID`) REFERENCES `Diseases` (`Disease_ID`);

--
-- Constraints for table `Patient_Diseases_History`
--
ALTER TABLE `Patient_Diseases_History`
  ADD CONSTRAINT `patient_diseases_history_ibfk_1` FOREIGN KEY (`Disease_ID`) REFERENCES `Diseases` (`Disease_ID`),
  ADD CONSTRAINT `patient_diseases_history_ibfk_2` FOREIGN KEY (`Patient_Uae_ID`) REFERENCES `Patient` (`Patient_UAE_ID`),
  ADD CONSTRAINT `patient_diseases_history_ibfk_3` FOREIGN KEY (`Hospital_User_ID`) REFERENCES `Hospital` (`Hospital_User_ID`),
  ADD CONSTRAINT `patient_diseases_history_ibfk_4` FOREIGN KEY (`Lab_Result_ID`) REFERENCES `Lab_Results` (`Lab_Result_ID`);

--
-- Constraints for table `Patient_Personal_Info`
--
ALTER TABLE `Patient_Personal_Info`
  ADD CONSTRAINT `patient_personal_info_ibfk_1` FOREIGN KEY (`Patient_Info_ID`) REFERENCES `Patient_Contact_Info_And_Address` (`Patient_Contact_Address_ID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
