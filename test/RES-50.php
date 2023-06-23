<?php
$command = "cd {$_POST['username']}; ls -l";
?>
<p>Executing: <pre><?php echo $command; ?></pre></p>
Result:
<pre>
<?php
passthru($command);
?>
</pre>