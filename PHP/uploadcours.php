<?php

$target_dir = "cours/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"][0]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

// Check if image file is a actual image or fake image
/*if(isset($_POST["submit"])) {
  $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
  if($check !== false) {
    echo json_encode( "File is an image - " . $check["mime"] . ".");
    $uploadOk = 1;
  } else {
    echo json_encode( "File is not an image.");
    $uploadOk = 0;
  }
}
*/
// Check if file already exists
if (file_exists($target_file)) {
  echo json_encode( " ce fichier existe deja.");
  $uploadOk = 0;
}

// Check file size
if ($_FILES["fileToUpload"]["size"][0] > 5000000) {
  echo json_encode( " le fichier est tres grand.");
  $uploadOk = 0;
}

// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "pdf" && $imageFileType != "ppt" && $imageFileType != "docx"
&& $imageFileType != "word" && $imageFileType != "ppt" && $imageFileType != "pptx"
&& $imageFileType != "mp4") {
  echo json_encode( " le format du fichier est insupporte.");
  $uploadOk = 0;
}

// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
  echo json_encode( " il y'a une erreur.");
// if everything is ok, try to upload file
} else {
  if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"][0], $target_file)) {
    echo json_encode( "success");
  } else {
    echo json_encode( "il y'a une erreur.");
  }
}
?>