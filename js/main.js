(function(){

	var arrive = new Date(2014, 2, 30, 10) / 1000;

	$('.counter').scojs_countdown({
		until: arrive
	});

}());
