<?php
//fetch.php
if(isset($_POST["slot"]))
{
 $connect = mysqli_connect("host", "username", "password", "table");
 $query = "SELECT * FROM slots WHERE location = '".$_POST["slot"]."'";
 $result = mysqli_query($connect, $query);
 while($row = mysqli_fetch_array($result))
 {
  $data["slot"] = $row["location"];
  $data["item"] = $row["item"];
  $data["description"] = $row["description"];
  $data["inventory"] = $row["on_hand"];
  $data["movement"] = $row["cs_week"];
  $data["onorder"] = $row["po"];
  $data["tihi"] = $row["ti_hi"];
 }

 echo json_encode($data);
}
?>
