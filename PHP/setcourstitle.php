<?php 
require('conn.php');
$json = file_get_contents('php://input');
$obj = json_decode($json);
$titre = $obj->titre;
$id = $obj->id;
$query = "UPDATE cours SET titre = '$titre' WHERE id = $id";
$trp = mysqli_query($conn, $query);
if($trp)
echo json_encode("success");
else
echo json_encode("machi nays");
?>