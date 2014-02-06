(function() {

	var  today = new Date(),
	tomorrow = Math.round(today.setDate(today.getDate() + 2) / 1000);

	var arrive = Date.parse(2014, 2, 31);

	$('.counter').scojs_countdown({
		until: arrive
	});

})();