<?php
   // header("Asscess-Control-Allow-Origin: http://192.168.211.53");
   header("Asscess-Control-Allow-Origin: http://localhost");
   header("Asscess-Control-Allow-Origin: *");
   include "./common/commonFun.php";

?>
<?php
   $input =$_POST;
   // dd($input);
   echo json_encode($input);
?>