
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $eleve=$obj->eleve;

    $query = "SELECT c.emploi_du_temps FROM classe c,eleves e WHERE e.classe=c.id_classe and e.id=".$eleve.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r); //convert php data to json data
?>