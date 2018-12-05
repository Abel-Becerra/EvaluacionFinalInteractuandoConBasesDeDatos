<?php
$servername = "localhost:3366";
$user = "root";
$pwd = "";
$db = "php";

$conn = new mysqli($servername, $user, $pwd, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO events(title, startDate, startTime, endDate, endTime, isFullDay) VALUES ('" . $_POST["titulo"] . "','" . $_POST["start_date"] . "','" . $_POST["start_hour"] . "','" . $_POST["end_date"] . "','" . $_POST["end_hour"] . "','" . $_POST["allDay"] . "')";

$result = $conn->query($sql);

if ($conn->query($sql) === TRUE) {
  echo "{\"msg\":\"OK\"}";
} else {
  echo "{\"msg\":\"Error\"}";
}

$conn->close();

?>
