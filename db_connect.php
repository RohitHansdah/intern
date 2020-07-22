<?php

$username = 'root';
$password = '';
$db = 'mysql:host=localhost; dbname=mydb';

try {

  $conn = new PDO($db, $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

} catch (PDOException $e) {

  echo "Fail to connect to the database ".$e->getMessage();

}

?>