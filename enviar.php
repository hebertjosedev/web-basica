<?php
   $nombre = $_POST['nombre'];
   $email = $_POST['email'];
   $consulta = $_POST['consulta'];

   if(empty($email) || empty($consulta)){
       echo json_encode('error');
   }else{
       echo json_encode('exito');
   }
   ?>
   
   