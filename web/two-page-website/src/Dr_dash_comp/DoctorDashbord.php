<?php
// Database connection
include_once '../api/local_db.php'; // Adjust path to your database connection file if needed

// Check if patient_id is provided in POST request
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['patient_id'])) {
    $patient_id = $_POST['patient_id'];

    // SQL query to fetch patient data
    $sql = "SELECT First_Name, Middle_Name, Last_Name, Date_Of_Birth, Nationality, Gender 
            FROM Patient_Personal_Info 
            WHERE Patient_Info_ID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $patient_id);

    // Execute the query and process the result
    if ($stmt->execute()) {
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $patient = $result->fetch_assoc();

            // Calculate age from Date of Birth
            $dateOfBirth = new DateTime($patient['Date_Of_Birth']);
            $today = new DateTime();
            $age = $today->diff($dateOfBirth)->y;

            // Prepare response data
            $response = [
                'name' => $patient['First_Name'] . ' ' . $patient['Middle_Name'] . ' ' . $patient['Last_Name'],
                'age' => $age,
                'condition' => 'Example Condition', // Replace with actual condition if stored in DB
                'nationality' => $patient['Nationality'],
                'gender' => $patient['Gender'],
                'patient_id' => $patient_id
            ];

            // Send response in JSON format
            echo json_encode($response);
        } else {
            echo json_encode(['error' => 'Patient not found']);
        }
    } else {
        echo json_encode(['error' => 'Query error']);
    }

    $stmt->close();
} else {
    echo json_encode(['error' => 'Invalid request']);
}

$conn->close();
?>
