

<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $prof=$obj->prof;
    $query = "SELECT count(e.id) as count FROM `eleves` e,enseigner en where en.prof =".$prof." and en.classe = e.classe";
    $trp = mysqli_query($conn, $query);
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r);
?>