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
// Retrieve data from POST request
$firstName = $_POST['firstName'];
$middleName = $_POST['middleName'];
$lastName = $_POST['lastName'];
$dateOfBirth = $_POST['dateOfBirth'];
$nationality = $_POST['nationality'];
$gender = $_POST['gender'];
$address1 = $_POST['address1'];
$address2 = $_POST['address2'];
$emirate = $_POST['emirate'];
$idNumber = $_POST['idNumber'];
$idExpiry = $_POST['idExpiry'];
$passportNumber = $_POST['passportNumber'];
$passportExpiry = $_POST['passportExpiry'];
$phone1 = $_POST['phone1'];
$phone2 = $_POST['phone2'];
$emergencyContactPhone = $_POST['emergencyContactPhone'];
$emergencyContactName = $_POST['emergencyContactName'];
$emergencyContactRelation = $_POST['emergencyContactRelation'];
$email = $_POST['email'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password

// Prepare an SQL statement to insert data into the 'users' table
$sql = "INSERT INTO users (first_name, middle_name, last_name, date_of_birth, nationality, gender, address1, address2, emirate, id_number, id_expiry, passport_number, passport_expiry, phone1, phone2, emergency_contact_phone, emergency_contact_name, emergency_contact_relation, email, password) 
        VALUES ('$firstName', '$middleName', '$lastName', '$dateOfBirth', '$nationality', '$gender', '$address1', '$address2', '$emirate', '$idNumber', '$idExpiry', '$passportNumber', '$passportExpiry', '$phone1', '$phone2', '$emergencyContactPhone', '$emergencyContactName', '$emergencyContactRelation', '$email', '$password')";

// Execute the SQL statement and check for success
if ($conn->query($sql) === TRUE) {
    echo json_encode(["message" => "Account created successfully!"]);
} else {
    echo json_encode(["error" => "Error: " . $sql . "<br>" . $conn->error]);
}

// Close the connection
$conn->close();
?>>
