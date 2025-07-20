<?php
// Database connection
$servername = "localhost"; // Change this to your server name
$username = "your_username"; // Your database username
$password = "your_password"; // Your database password
$dbname = "banandb"; // Your database name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Set the response header to JSON
header('Content-Type: application/json');

// Handle GET request to fetch appointments
if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $sql = "SELECT * FROM Appointments"; // Fetch all appointments
    $result = $conn->query($sql);
    
    $appointments = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $appointments[] = $row;
        }
    }
    echo json_encode($appointments);
}

// Handle POST request to create a new appointment
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $hospital = $_POST['hospital'];
    $department = $_POST['department'];
    $reason = $_POST['reason'];
    $date = $_POST['date'];
    $time = $_POST['time'];

    $stmt = $conn->prepare("INSERT INTO Appointments (Hospital, Department, Reason, Appointment_Date, Appointment_Time) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $hospital, $department, $reason, $date, $time);
    
    if ($stmt->execute()) {
        echo json_encode(["message" => "Appointment booked successfully"]);
    } else {
        echo json_encode(["error" => "Error booking appointment"]);
    }
    $stmt->close();
}

$conn->close();
?>
