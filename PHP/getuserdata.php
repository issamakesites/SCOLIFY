
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;
    $role=$obj->role;
    
    if($role == "parent")
    $query = "SELECT id,nom,prenom,img,role from parents where id=".$id;
    if($role == "eleve")
    $query = "SELECT id,nom,prenom,img,role from eleves where id=".$id;
    if($role == "admin")
    $query = "SELECT id,nom,prenom,img,role from admin where id=".$id;
    if($role == "prof")
    $query = "SELECT id,nom,prenom,img,role from enseignants where id=".$id;


    $trp = mysqli_query($conn, $query);
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r);

?>