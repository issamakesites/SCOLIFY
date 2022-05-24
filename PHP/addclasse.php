
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $cle=$obj->cle;
    $nom=$obj->nom;
    $emploi=$obj->emploi;
    $query = "INSERT INTO classe VALUES('$obj->cle','$obj->nom','$obj->emploi')"; 
    $trp = mysqli_query($conn, $query);
    echo json_encode("success");
?>