<?php
// Include database connection
$host = 'localhost';
$dbname = 'banandb'; 
$username = 'root';
$password = ''; 

// Create a connection
$conn = mysqli_connect($host, $username, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
// Determine the action from the request
$action = $_GET['action'] ?? '';

switch ($action) {
    case 'getAppointments':
        // Retrieve all appointments from the database
        $stmt = $pdo->query("SELECT * FROM appointments");
        $appointments = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($appointments);
        break;

    case 'addAppointment':
        // Add a new appointment to the database
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("INSERT INTO appointments (hospital, department, reason, date, time, doctor, status) VALUES (?, ?, ?, ?, ?, 'Dr. Smith', 'Scheduled')");
        $stmt->execute([$data['hospital'], $data['department'], $data['reason'], $data['date'], $data['time']]);
        echo json_encode(['message' => 'Appointment booked successfully']);
        break;

    case 'cancelAppointment':
        // Update an appointment's status to 'Cancelled'
        $id = $_GET['id'];
        $stmt = $pdo->prepare("UPDATE appointments SET status = 'Cancelled' WHERE id = ?");
        $stmt->execute([$id]);
        echo json_encode(['message' => 'Appointment canceled']);
        break;

    case 'rescheduleAppointment':
        // Update an appointment's date and time
        $data = json_decode(file_get_contents("php://input"), true);
        $stmt = $pdo->prepare("UPDATE appointments SET date = ?, time = ? WHERE id = ?");
        $stmt->execute([$data['date'], $data['time'], $data['id']]);
        echo json_encode(['message' => 'Appointment rescheduled']);
        break;

    default:
        echo json_encode(['message' => 'Invalid action']);
        break;
}
?>>
