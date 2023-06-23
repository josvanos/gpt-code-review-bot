<?php

echo 'Hello ' . htmlentities($_GET['name'], ENT_QUOTES, 'UTF-8') .'!';