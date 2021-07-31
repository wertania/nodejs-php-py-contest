<?php
include_once('connection.php'); 

class TestDb{   
    function getUsers(){             
        $sql ="select * from users";
        return pg_query($sql);
    } 
}
?>