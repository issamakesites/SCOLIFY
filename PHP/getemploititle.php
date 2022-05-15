
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $eleve=$obj->eleve;

    $query = "SELECT nom,prenom FROM eleves WHERE id=".$eleve.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r); //convert php data to json data
?>