
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $enseignement=$obj->enseignement;
    $month=$obj->month;
    $query = "SELECT COUNT(id) as count FROM `cours` WHERE month(date)=".$month."
    and enseignement = ".$enseignement;
    $trp = mysqli_query($conn, $query);
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r);
?>