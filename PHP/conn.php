<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
$servername = "localhost";
$username   = "root";
$password   = "";
$dbname     = "pfe";
// creer la connectiom
$conn = new mysqli($servername, $username, $password, $dbname);
// tester la connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
?>