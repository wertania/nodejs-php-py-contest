<?php 
$host = "192.168.188.59";
$port = "5432";
$dbname = "testdb";
$user = "postgres";
$password = "secret"; 
$connection_string = "host={$host} port={$port} dbname={$dbname} user={$user} password={$password} ";
$dbconn = pg_connect($connection_string);     
?>