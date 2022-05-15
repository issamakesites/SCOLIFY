
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $enseignement=$obj->enseignement;

    $query = "SELECT m.nom FROM matiere m,enseigner en WHERE m.id_matiere=en.matiere
    and en.id=".$enseignement.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r); //convert php data to json data
?>