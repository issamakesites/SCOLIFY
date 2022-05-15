
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $eleve = $obj->eleve; 
    $enseignemant = $obj->enseignemant; 
    $query = "SELECT * FROM note n,devoir d,matiere m,enseigner en WHERE eleve=".$eleve." and n.devoir = d.id and d.enseignement = en.id and d.enseignement = ".$enseignemant." and en.matiere = m.id_matiere";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows); //convert php data to json data
?>