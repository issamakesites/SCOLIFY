
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $currentmonth=$obj->month;
    $currentyear=$obj->year;
    $currentid=$obj->parent_id;
    $query = "SELECT id_retard as monthcount from retards a,eleves e where month(heure)=".$currentmonth." and year(heure)=".$currentyear." and e.id=a.eleve and e.parent_id=".$currentid.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows); //convert php data to json data
?>