

<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;
    $query = "SELECT DISTINCT c.id_classe,c.nom,c.emploi_du_temps,m.nom as matierenom 
    FROM enseigner en,classe c,matiere m WHERE en.classe = c.id_classe and en.matiere
     = m.id_matiere and en.prof =".$id;
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>