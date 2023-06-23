<?php
    $ip = filter_input(INPUT_GET,'ip',FILTER_VALIDATE_IP);

    if (filter_var($ip, FILTER_VALIDATE_IP)) {
        $cmd = sprintf("ping %s", $ip); 
        $result = exec($cmd);
    } else {
        echo("$ip is not a valid IP address");
    }
