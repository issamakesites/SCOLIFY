
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $user=$obj->user;
    $role=$obj->role;
    $query = "SELECT count(id) as count FROM `notifications` WHERE role='".$role."' 
    and user=".$user." and etat = 0;";
    $trp = mysqli_query($conn, $query);
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r); //convert php data to json data
?>