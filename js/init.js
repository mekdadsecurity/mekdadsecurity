// Edit the date here

$(document).ready(function() {
						   
	$("#countdown").countdown({
				date: "01 July 2021 11:30:00",
				format: "on"
			},
			
			function() {
				// callback function
			});

});	
