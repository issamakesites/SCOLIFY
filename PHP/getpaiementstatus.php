
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $currentmonth=$obj->month;
    $currentyear=$obj->year;
    $currentid=$obj->parent_id;
    $query = "SELECT count(id) as etat from paiements where month(datepaiement)=".$currentmonth." and year(datepaiement)=".$currentyear." and parent=".$currentid.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    $r = mysqli_fetch_assoc($trp);
    if($r)
    echo json_encode($r);
    else echo ""; //convert php data to json data
?>