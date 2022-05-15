
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->parentid;
    $eleveid=$obj->eleveid;
    $query = "SELECT * from eleves where parent_id=".$id." and id=".$eleveid.";";
    $trp = mysqli_query($conn, $query);
    $rows = array();
    $r = mysqli_fetch_assoc($trp);
    echo json_encode($r); //convert php data to json data
?>