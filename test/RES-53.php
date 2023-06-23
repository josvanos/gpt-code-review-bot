<?php
    if ($targetIP = filter_input(INPUT_GET,'ip',FILTER_VALIDATE_IP)) { 
        $cmd = exec( "ping $targetIP" );
     }  
