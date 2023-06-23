<?php
    $targetIP = $_GET[ 'ip' ];
    $cmd = exec( "ping $target" );