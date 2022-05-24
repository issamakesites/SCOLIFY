
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $role=$obj->role;
    if($role == "prof")
    $query = "INSERT INTO enseignants VALUES('','$obj->nom','$obj->prenom',
    '$obj->login','$obj->password','$role','placeholder.png','$obj->email')"; 
    $trp = mysqli_query($conn, $query);
    if($role == "eleve")
    $query = "INSERT INTO eleves VALUES('','$obj->nom','$obj->prenom',
    '$obj->login','$obj->password','$role','','$obj->email')"; 
    $trp = mysqli_query($conn, $query);
    if($role == "admin")
    $query = "INSERT INTO admin VALUES('','$obj->nom','$obj->prenom',
    '$obj->login','$obj->password','$role','','$obj->email')"; 
    $trp = mysqli_query($conn, $query);
    if($role == "parent")
    $query = "INSERT INTO parents VALUES('','$obj->nom','$obj->prenom',
    '$obj->login','$obj->password','$role','','$obj->email')"; 
    $trp = mysqli_query($conn, $query); 
    
    echo json_encode("success");
?>