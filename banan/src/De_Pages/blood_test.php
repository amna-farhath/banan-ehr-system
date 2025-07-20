<?php
header('Content-Type: application/json');

// Include database connection
$host = 'localhost';
$dbname = 'banandb'; 
$username = 'root';
$password = ''; 

try {
    // Create a PDO instance
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Fetch blood test results for a specific patient
    $patientId = 'P987654'; // This should be dynamic based on the logged-in user
    $stmt = $pdo->prepare("SELECT log_date, test_type, result, hospital, laboratory 
                            FROM blood_test_results 
                            WHERE patient_id = :patient_id 
                            ORDER BY log_date DESC");
    $stmt->bindParam(':patient_id', $patientId);
    $stmt->execute();

    // Fetch the results
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    // Return results as JSON
    echo json_encode($results);
} catch (PDOException $e) {
    // Return error message
    echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
}

// Close the connection (optional, as PDO will automatically close it)
$pdo = null;
?>>