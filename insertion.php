<?php
$servername = 'localhost';
$username = 'root';
$password ='';
$database = 'computerclubuok';

try {
    $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}

$user = $_POST['username'];
$email = $_POST['email'];
$pass = $_POST['password'];
$rtp = $_POST['confirm_password'];
$phone = $_POST['phone_number'];
$age = $_POST['age'];

// Check if the passwords match
if ($pass !== $rtp) {
    echo "Password and confirm password do not match.";
    exit;
}

// Prepare an SQL statement to insert the data
$sql = "INSERT INTO users (username, email, password, phone_number, age) VALUES ('$user','$email', '$pass', '$phone', '$age')";

try {
    $conn->exec($sql);
    echo "Record inserted successfully";
} catch(PDOException $e) {
    echo "Error: " . $e->getMessage();
}

$conn = null;

// Redirect back to the register page
header('Location: register.html');
exit; // Make sure to exit to prevent further code execution
?>
