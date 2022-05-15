
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $currentid=$obj->parent_id;
    $query = "SELECT * from tache where etat = 0 and eleve=".$currentid.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows); //convert php data to json data
?>