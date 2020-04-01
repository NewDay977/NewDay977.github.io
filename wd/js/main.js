"use strict";
$(document).ready(function() {
	$('body').on('click', '.header__burger', function() {
		$('.header__menu').slideToggle();
	});

	$(window).resize(function() {
		if ($(window).width() >= 992) {
			$('.header__menu').attr('style', '');
		}
	});
});
