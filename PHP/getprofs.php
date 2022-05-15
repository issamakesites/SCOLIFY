
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    if($obj->role == "parent"){
        $id=$obj->id;
        $eleve=$obj->eleve;
        $query = "SELECT p.contact as contact,p.img as img,p.id,p.nom as nom,p.prenom as prenom,m.nom as matiere,e.nom as elevenom,e.prenom as eleveprenom,c.nom as classe from eleves e,enseignants p, enseigner en,matiere m , classe c 
        where p.id = en.prof and en.classe = e.classe = c.id_classe and m.id_matiere = en.matiere and e.parent_id=".$id." and e.id=".$eleve.";";
        $trp = mysqli_query($conn, $query);
        $rows = array();
        while($r = mysqli_fetch_assoc($trp)) {
            $rows[] = $r;
        }
        echo json_encode($rows); //convert php data to json data
    }
    if($obj->role == "eleve"){
        $eleve=$obj->eleve;
        $query = "SELECT p.contact as contact,p.img as img,p.id,p.nom as nom,p.prenom as prenom,m.nom as matiere,e.nom as elevenom,e.prenom as eleveprenom,c.nom as classe from eleves e,enseignants p, enseigner en,matiere m , classe c 
        where p.id = en.prof and en.classe = e.classe = c.id_classe and m.id_matiere = en.matiere and  e.id=".$eleve.";";
        $trp = mysqli_query($conn, $query);
        $rows = array();
        while($r = mysqli_fetch_assoc($trp)) {
            $rows[] = $r;
        }
        echo json_encode($rows); //convert php data to json data
    }
    
?>