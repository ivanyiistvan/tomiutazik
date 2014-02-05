(function() {

	var  today = new Date(),
	tomorrow = Math.round(today.setDate(today.getDate() + 2) / 1000);

	$('.counter').scojs_countdown({
		until: tomorrow
	});

})();