<?php
header("Content-Type: application/json");

// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "banandb";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$response = [];

// Handle fingerprint scan request
if (isset($_GET['fingerprint']) && $_GET['fingerprint'] == 'true') {
    $sql = "SELECT * FROM Patient_Personal_Info LIMIT 1"; // Simulate fingerprint scan data
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $response = $result->fetch_assoc();
    } else {
        $response = ["error" => "No data found for fingerprint scan."];
    }
}

// Handle fetch by patient ID
if (isset($_GET['patientId'])) {
    $patientId = $conn->real_escape_string($_GET['patientId']);
    $sql = "SELECT * FROM Patient_Personal_Info WHERE Patient_Info_ID = '$patientId'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows > 0) {
        $response = $result->fetch_assoc();
    } else {
        $response = ["error" => "No data found for Patient ID: $patientId"];
    }
}

echo json_encode($response);
$conn->close();
?>
