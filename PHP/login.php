<?php 
require('conn.php');
session_start();
 
// Storing session data
$_SESSION["username"] = "gg";
$_SESSION["password"] = "wp";
$json = file_get_contents('php://input');
     
// decoding the received JSON and store into $obj variable.
$obj = json_decode($json);

// Populate User email from JSON $obj array and store into $email.
$login = $obj->login;


$password = $obj->pass; 
$query = "SELECT id,nom,prenom,role from parents where login='".$login."' and password='".$password."'";
$trp = mysqli_query($conn, $query);
$r = mysqli_fetch_assoc($trp);
if(!$r)
 {
    $query = "SELECT id,nom,role from eleves where login='".$login."' and password='".$password."'";
    $trp = mysqli_query($conn, $query);
    $r = mysqli_fetch_assoc($trp);
    if(!$r)
      {
         $query = "SELECT id,nom,role from admin where login='".$login."' and password='".$password."'";
         $trp = mysqli_query($conn, $query);
         $r = mysqli_fetch_assoc($trp);
      }
      if(!$r)
         {
            $query = "SELECT id,nom,role from enseignants where login='".$login."' and password='".$password."'";
            $trp = mysqli_query($conn, $query);
            $r = mysqli_fetch_assoc($trp);
          }
 }

if($r)
echo '{"userData": ' .json_encode($r) . '}';
else 
echo 'il existe une erreur';

?>