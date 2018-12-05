<?php
$servername = "localhost:3366";
$user = "root";
$pwd = "";
$db = "php";

$conn = new mysqli($servername, $user, $pwd, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT e.id, e.title, concat(startDate, ' ', startTime) AS start, concat(endDate, ' ', endTime) AS end, isFullDay, 'true' AS resourceEditable FROM events e JOIN usereventrel r ON r.event = e.id WHERE r.user = '" . $_POST["user"] . "'";

$myArray = array();
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $tempArray = array();
  while($row = $result->fetch_object()) {
    $tempArray = $row;
    array_push($myArray, $tempArray);
  }
  echo "{\"msg\":\"OK\", \"eventos\": " . json_encode($myArray) . "}";
} else {
  echo "{\"msg\":\"Error\"}";
}

$result->close();
$conn->close();

?>
