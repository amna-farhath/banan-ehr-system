<?php
// Include the database connection file
require_once 'local_db.php';  // Ensure this path matches your actual connection file location

header("Content-Type: application/json");

// Check the HTTP request method
$method = $_SERVER['REQUEST_METHOD'];

// Handle different request methods
switch ($method) {
    case 'GET':
        // Route to fetch nurse info or patient data based on URL parameters
        if (isset($_GET['action'])) {
            switch ($_GET['action']) {
                case 'getNurseInfo':
                    echo json_encode(getNurseInfo());
                    break;
                case 'getPatientById':
                    if (isset($_GET['patientId'])) {
                        echo json_encode(getPatientById($_GET['patientId']));
                    } else {
                        echo json_encode(['error' => 'Patient ID not provided']);
                    }
                    break;
                default:
                    echo json_encode(['error' => 'Invalid action']);
            }
        } else {
            echo json_encode(['error' => 'No action specified']);
        }
        break;
    default:
        echo json_encode(['error' => 'Invalid request method']);
}

// Fetch nurse information
function getNurseInfo() {
    // Example static nurse info. Replace with your actual query if nurse data is stored in DB
    return [
        "nurseName" => "Sarah Thompson",
        "nurseLicense" => "NURSE12345",
        "hospitalName" => "City General Hospital",
        "licenseNumber" => "NL12345",
        "licenseExpiry" => "2027-12-01",
    ];
}

// Fetch patient information by ID
function getPatientById($patientId) {
    global $conn;

    $sql = "SELECT First_Name AS name, TIMESTAMPDIFF(YEAR, Date_Of_Birth, CURDATE()) AS age,
            Medical_Conditions AS medicalConditions, Medications AS medications
            FROM Patient_Personal_Info WHERE Patient_Uae_ID = ?";
    
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $patientId);
    $stmt->execute();
    $result = $stmt->get_result();
    if ($result->num_rows > 0) {
        return $result->fetch_assoc();
    } else {
        return ["error" => "Patient not found"];
    }
}
?>
