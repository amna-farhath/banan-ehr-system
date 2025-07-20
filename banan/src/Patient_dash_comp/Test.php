<?php
// test.php
header("Content-Type: application/json");

// Database connection details
$host = 'localhost';
$dbname = 'your_database_name';
$user = 'your_database_user';
$password = 'your_database_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $user, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo json_encode(["error" => "Database connection failed: " . $e->getMessage()]);
    exit();
}

// Determine the action to perform based on the 'action' parameter
$action = $_GET['action'] ?? '';

// Handle actions: either fetching test results or adding a test request
if ($action === 'getTestResults') {
    getTestResults($pdo);
} elseif ($action === 'addTestRequest') {
    addTestRequest($pdo);
} else {
    echo json_encode(["error" => "Invalid action specified."]);
}

// Function to fetch test results from the database
function getTestResults($pdo) {
    try {
        $stmt = $pdo->prepare("SELECT logDate, chestXray, mri, hospital, lab FROM test_results");
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($results);
    } catch (PDOException $e) {
        echo json_encode(["error" => "Failed to retrieve test results: " . $e->getMessage()]);
    }
}

// Function to add a new test request
function addTestRequest($pdo) {
    $data = json_decode(file_get_contents('php://input'), true);

    // Validate data fields
    $testType = $data['testType'] ?? '';
    $testReason = $data['testReason'] ?? '';
    $doctorNote = $data['doctorNote'] ?? '';

    if (!$testType || !$testReason || !$doctorNote) {
        echo json_encode(["error" => "Missing required fields"]);
        return;
    }

    // Insert new test request
    try {
        $stmt = $pdo->prepare("INSERT INTO test_requests (testType, testReason, doctorNote) VALUES (:testType, :testReason, :doctorNote)");
        $stmt->bindParam(':testType', $testType);
        $stmt->bindParam(':testReason', $testReason);
        $stmt->bindParam(':doctorNote', $doctorNote);
        $stmt->execute();

        echo json_encode(["message" => "Test request added successfully"]);
    } catch (PDOException $e) {
        echo json_encode(["error" => "Failed to add test request: " . $e->getMessage()]);
    }
}
?>>
