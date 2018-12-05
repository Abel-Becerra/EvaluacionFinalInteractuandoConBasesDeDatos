<?php
$servername = "localhost:3366";
$user = "root";
$pwd = "";
$db = "php";

$conn = new mysqli($servername, $user, $pwd, $db);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO users (email, name, password, brithdate)
  VALUES ('mdelacruz@northware.mx', 'Manuel de la Cruz', '"
  . password_hash("contraseña", PASSWORD_DEFAULT) . "', '1980-09-30')";

if ($conn->query($sql) === TRUE) {
    echo "Usuario de Manuel creado con éxito\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error . "\n";
}

$sql = "INSERT INTO users (email, name, password, brithdate)
  VALUES ('margie@northware.mx', 'Margaret Ford', '"
  . password_hash("contraseña", PASSWORD_DEFAULT) . "', '1990-04-15')";

if ($conn->query($sql) === TRUE) {
    echo "Usuario de Margaret creado con éxito\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error . "\n";
}

$sql = "INSERT INTO users (email, name, password, brithdate)
  VALUES ('asal@northware.mx', 'Avril Salazar', '"
  . password_hash("contraseña", PASSWORD_DEFAULT) . "', '1992-06-23')";

if ($conn->query($sql) === TRUE) {
    echo "Usuario de Avril creado con éxito\n";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error . "\n";
}

$conn->close();
?>
