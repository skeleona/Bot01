<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$username = $data['username'];
$email = $data['email'];
$password = $data['password'];

$sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
  echo json_encode(array('success' => true));
} else {
  echo json_encode(array('success' => false, 'message' => 'Error: ' . $conn->error));
}

$conn->close();
?>