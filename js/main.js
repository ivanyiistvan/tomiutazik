(function(){

	var arrive = new Date(2014, 2, 28, 12) / 1000;

	$('.counter').scojs_countdown({
		until: arrive
	});

}());