<?php
include 'db.php';

$data = json_decode(file_get_contents('php://input'), true);

$email = $data['email'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  echo json_encode(array('success' => true));
} else {
  echo json_encode(array('success' => false, 'message' => 'Invalid email or password'));
}

$conn->close();
?>