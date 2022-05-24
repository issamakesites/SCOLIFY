
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $role=$obj->role;
    $id=$obj->id;
    if($role == "prof")
    $query = "DELETE FROM enseignants WHERE id=$id;"; 
    $trp = mysqli_query($conn, $query);
    if($role == "eleve")
    $query = "DELETE FROM eleves WHERE id=$id;"; 
    $trp = mysqli_query($conn, $query);
    if($role == "admin")
    $query = "DELETE FROM admin WHERE id=$id;"; 

    $trp = mysqli_query($conn, $query);
    if($role == "parent")
    $query = "DELETE FROM parents WHERE id=$id;"; 

    $trp = mysqli_query($conn, $query);
    echo json_encode("success"); 
?>