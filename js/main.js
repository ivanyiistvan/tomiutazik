(function(){

	var arrive = new Date(2014, 10, 07, 24) / 1000;

	$('.counter').scojs_countdown({
		until: arrive
	});

}());
