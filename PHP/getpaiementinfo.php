
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $parent = $obj->parent;
    $month = $obj->month;
    $annee = $obj->annee;
    $query = "SELECT *,year(datepaiement) as year from paiements where  parent =  $parent
     and month(datepaiement)= $month and
    annee_scolaire = '".$annee."';";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>