
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;
    $query = "SELECT en.id as enid,el.nom as elevenom,el.prenom as eleveprenom,
    p.nom as profnom,p.prenom as profprenom,m.nom as matierenom,
    c.nom as classenom 
    FROM enseigner en, enseignants p, matiere m,eleves el,classe c 
    WHERE p.id = en.prof 
    and el.id = ".$id."
    and el.classe = en.classe 
    and en.matiere = m.id_matiere 
    and en.classe=c.id_classe";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>