
<?php
require('conn.php');
    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $eleve=$obj->eleve;
    $query = "SELECT count(id_absence) as count   from absences where eleve=".$eleve.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
        break;
    }
    echo json_encode($rows); //convert php data to json data
?>