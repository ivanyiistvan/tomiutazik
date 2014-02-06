(function() {

	var  today = new Date(),
	tomorrow = Math.round(today.setDate(today.getDate() + 2) / 1000);

	var arrive = new Date(2014, 2, 28);

	$('.counter').scojs_countdown({
		until: arrive
	});

})();