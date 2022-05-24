
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;
    $role=$obj->role;
    if($role=="eleve"){
        $query = "SELECT parent_id FROM `eleves` WHERE id=".$id;
        $trp = mysqli_query($conn, $query);
        $parent = mysqli_fetch_assoc($trp);
        $query = "INSERT INTO notifications (`id`, `content`, `role`, `user`, `date`, `etat`) VALUES (NULL, 'un de vos enfants vient de faire une tache', 'parent', '".$parent."', current_timestamp(), '0');";
        $trp = mysqli_query($conn, $query);
    }
?>