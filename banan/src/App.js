import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Mainpage from './ImportantPages/Mainpage';
import LoginPage from './ImportantPages/LoginPage';
import CreateAccountPage from './ImportantPages/CreateAccountPage';
import RegisterPatientPage from './ImportantPages/RegisterPatientPage';
import 'bootstrap/dist/css/bootstrap.min.css';


// Files in Dr_dash_comp 
import DrDashboard from './Dr_dash_comp/DrDashboard';
import PatientList from './Dr_dash_comp/PatientList';
import DrDetails from './Dr_dash_comp/DrDetails';
import AppointSummary from './Dr_dash_comp/Appoint_summary';

// Files in Acd_dash_comp
import AcdDashboard from './Acd_dash_comp/AcdDashboard';

// Files in Amb_dash_comp
import AmbDashboard from './Amb_dash_comp/AmbDashoard';

// Files in Pat_dash_comp
import PatientDetails from './Patient_dash_comp/PatientDetails';
import Patdashboard from './Patient_dash_comp/Patdashboard';
import PatHeader from './Patient_dash_comp/PatHeader';
import PatAppointments from './Patient_dash_comp/PatAppointments';
import History from './Patient_dash_comp/History';
import TestResult from './Patient_dash_comp/TestResult';

// Files in De_Pages 
import Allergies from './De_Pages/Allergies';
import AppointmentsDe from './De_Pages/AppointmentsDe';
import BloodTest from './De_Pages/BloodTest';
import Diseases from './De_Pages/Diseases';
import Emergencies from './De_Pages/Emergencies';
import Prescriptions from './De_Pages/Prescriptions';

// Files in nurse dashboard
import NurseDashboard from './Nurse_dash_comp/NurseDashboard';
//File in lab dashboard
import LaboratoryDashboard from './Lab_dash_comp/LaboratoryDashboard';

//Files in Register_hospital
import HospitalCreateBlock from './Register_hospital/HospitalCreateBlock';
import SelectUser from './Register_hospital/SelectUser';
import RevokeAccount from './Register_hospital/RevokeAccount';
import InsRegister from './Register_hospital/InsRegister';
import CreateInstitution from'./Register_hospital/CreateInstitution';



function App() {
  return (
    <Router>
      <Routes>
        {/* Main route */}
        <Route path="/" element={<Mainpage />} />

        {/* User Account Routes */}
        <Route path="/register" element={<RegisterPatientPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create" element={<CreateAccountPage />} />

        {/* Dashboard Routes */}
        <Route path="/academic-dashboard" element={<AcdDashboard />} />
        <Route path="/ambulance-dashboard" element={<AmbDashboard />} />
        <Route path="/DrDashboard" element={<DrDashboard />} />
        <Route path="/Patdashboard" element={<Patdashboard />} />

        {/* Pages under "Pat_dash_comp" */}
        <Route path="/PatientDetails" element={<PatientDetails />} />
        <Route path="/quickInfoTable" element={<TestResult />} /> {/* Check this route */}
        <Route path="/PatAppointments" element={<PatAppointments />} />
        <Route path="/PatHeader" element={<PatHeader />} />
        <Route path="/History" element={<History/>} />
        <Route path="/TestResult" element={<TestResult/>} />
 
        {/* Pages under "De_Pages" */}
        <Route path="/allergies" element={<Allergies />} />
        <Route path="/appointmentsDe" element={<AppointmentsDe />} />
        <Route path="/blood-test" element={<BloodTest />} />
        <Route path="/diseases" element={<Diseases />} />
        <Route path="/emergencies" element={<Emergencies />} />
        <Route path="/prescriptions" element={<Prescriptions />} />

        {/* Pages under "Dr_dash_comp" */}
        <Route path="/PatientList" element={<PatientList />} />
        <Route path="/DrDetails" element={<DrDetails />} />
        <Route path="/Appoint-summary" element={<AppointSummary />} />
        <Route path="/NurseDashboard" element={<NurseDashboard />} />

        {/* Pages under "Register_hospital" */}
        <Route path="/HospitalCreateBlock" element={<HospitalCreateBlock />} />
        <Route path="/SelectUser" element={<SelectUser />} />
        <Route path="/RevokeAccount" element={<RevokeAccount />} />
        <Route path="/InsRegister" element={<InsRegister />} />
        <Route path="/CreateInstitution" element={<CreateInstitution />} />
        
        <Route path="/LaboratoryDashboard" element={<LaboratoryDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
