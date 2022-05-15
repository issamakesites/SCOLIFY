
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $currentmonth=$obj->month;
    $currentyear=$obj->year;
    $currentid=$obj->parent_id;
    $query = "SELECT COUNT(cours.id) as length from cours,enseigner,eleves WHERE 
    cours.enseignement = enseigner.id and enseigner.classe = eleves.classe 
    and month(date)=".$currentmonth." and eleves.id=".$currentid." and year(date)=".$currentyear;
    $trp = mysqli_query($conn, $query);
    $rows = array();
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r); //convert php data to json data
?>