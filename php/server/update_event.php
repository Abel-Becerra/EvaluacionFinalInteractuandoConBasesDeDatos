<?php
$servername = "localhost:3366";
$user = "root";
$pwd = "";
$db = "php";

$conn = new mysqli($servername, $user, $pwd, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "UPDATE events SET startDate = '" . $_POST["start_date"] . "', startTime = '" . $_POST["start_hour"] . "', endDate = '" . $_POST["end_date"] . "', endTime = '" . $_POST["end_hour"] . "' WHERE id = " . $_POST["id"];

$result = $conn->query($sql);

if ($conn->query($sql) === TRUE) {
  echo "{\"msg\":\"OK\"}";
} else {
  echo "{\"msg\":\"Error\"}";
}

$conn->close();

?>
