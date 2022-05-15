

<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $prof=$obj->prof;
    $query = "SELECT DISTINCT count(e.id) as count FROM cours e,enseigner en where en.prof =".$prof." group by enseignement";
    $trp = mysqli_query($conn, $query);
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r);
?>