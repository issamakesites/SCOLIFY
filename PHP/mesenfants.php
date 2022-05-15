
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;

    $query = "SELECT e.id as id,e.nom as nom,e.prenom,e.img as img,e.niveau as niveau, c.nom as classenom from eleves e,classe c where parent_id=".$id." and e.classe=c.id_classe;";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows); //convert php data to json data
?>