
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;
    $query = "SELECT DISTINCT t.id,t.tache,m.nom as matiere,t.deadline,t.etat,date(date) as dateprof FROM tache t,matiere m,enseigner en WHERE t.enseignement = en.id and en.matiere = m.id_matiere and  eleve = ".$id;
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>