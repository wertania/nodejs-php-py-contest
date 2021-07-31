<?php
$db = pg_connect("host=192.168.188.59 port=5432 dbname=testdb user=postgres password=secret");
$query = "SELECT * FROM users";
$result = pg_query($query);
echo $result
?>