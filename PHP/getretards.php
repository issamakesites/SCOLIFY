
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $eleve=$obj->id;

    $query = "SELECT r.id_retard as id,p.nom as profnom,p.prenom as profprenom,
    m.nom as matiere,r.heure as heure FROM retards r,eleves e,enseignants p,
    enseigner en,matiere m  WHERE e.classe=en.classe and p.id=r.enseignant and 
    en.matiere = m.id_matiere and eleve=".$eleve." group by r.id_retard order by heure desc;";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows); //convert php data to json data
?>