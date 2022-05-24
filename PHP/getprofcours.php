
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $prof = $obj->prof;
    $query = "SELECT c.id,c.enseignement as en,c.titre,c.fichier,.c.date,m.nom as module,
    cl.nom as classe FROM `cours` c,enseigner en,classe cl,matiere m 
    WHERE c.enseignement=en.id and en.prof=$prof 
    and cl.id_classe = en.classe and m.id_matiere=en.matiere";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>
