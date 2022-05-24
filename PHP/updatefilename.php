<?php 
require('conn.php');
$json = file_get_contents('php://input');
$obj = json_decode($json);
$id=$obj->id;
$name = $obj->name;
$query = "UPDATE cours SET fichier = '	
http://localhost:80/PFE/cours/$name', date=CURRENT_TIMESTAMP WHERE id = $id";
$trp = mysqli_query($conn, $query);
if($trp)
echo json_encode("nays");
else
echo json_encode("machi nays");
?>