<?php
$servername = "localhost:3366";
$user = "root";
$pwd = "";
$db = "php";

$conn = new mysqli($servername, $user, $pwd, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "DELETE FROM events WHERE id = " . $_POST["id"];

$result = $conn->query($sql);

if ($conn->query($sql) === TRUE) {
  echo "{\"msg\":\"OK\"}";
} else {
  echo "{\"msg\":\"Error\"}";
}

$conn->close();

?>
