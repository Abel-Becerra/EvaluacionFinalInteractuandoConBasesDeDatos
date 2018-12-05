<?php
$servername = "localhost:3366";
$user = "root";
$pwd = "";
$db = "php";

$conn = new mysqli($servername, $user, $pwd, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT password FROM users WHERE email = '" . $_POST["username"] . "'";

$result = $conn->query($sql);


if ($result->num_rows > 0) {
  if (password_verify($_POST["password"], $result->fetch_assoc()["password"])){
    echo "{\"msg\":\"OK\"}";
  }else{
    echo "{\"msg\":\"Sin acceso\"}";
  }
} else {
  echo "{\"msg\":\"Sin acceso\"}";
}

$conn->close();

?>
