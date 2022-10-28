<?php 
	while(1) {
		$arrContextOptions=array(
			"ssl"=>array(
				"verify_peer"=>false,
				"verify_peer_name"=>false,
			),
		);  
		file_get_contents("https://localhost:3000", false, stream_context_create($arrContextOptions));
		echo "ping ping\n";
		sleep(60);
	}
?>
