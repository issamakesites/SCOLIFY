

<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $classe=$obj->classe;
    $query = "SELECT e.id,e.nom,e.prenom,e.img,e.naissance,p.nom as pnom,p.prenom as pprenom
    FROM `eleves` e ,parents p where e.parent_id = p.id and classe=".$classe;
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>