
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $user=$obj->user;
    $role=$obj->role;
    $query = "UPDATE notifications SET etat = 1 WHERE user=".$user." and role='".$role."';";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
        $rows[] = $r;
    }
    echo json_encode($rows);
?>