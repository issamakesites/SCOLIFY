
<?php
require('conn.php');

    $json = file_get_contents('php://input');
    $obj = json_decode($json);
    $id=$obj->id;
    $query = "DELETE FROM classe WHERE id_classe=$id;"; 

    $trp = mysqli_query($conn, $query);
    echo json_encode("success"); 
?>