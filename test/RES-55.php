<?php
    $ip = filter_input(INPUT_GET,'ip',FILTER_VALIDATE_IP);

    if (filter_var($ip, FILTER_VALIDATE_IP)) {
        echo("$ip is a valid IP address");
        $cmd = exec( "ping $ip" );
    } else {
        echo("$ip is not a valid IP address");
    }
