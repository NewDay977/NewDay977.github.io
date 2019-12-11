'use strict';
$(document).ready(function(){
	$('a.go_top').hide();
	/* go to top button */
	let amountScrolled = 300;
	$(window).scroll(function() {
		if ( $(window).scrollTop() > amountScrolled ) {
			$('a.go_top').fadeIn(500);
		} else {
			$('a.go_top').fadeOut(500);
		}
	});
	$('a.go_top').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});

	/* anchor slowly go */
	$("body").on('click', '[href*="#"]', function(e){
	  	var fixed_offset = 100;
	  	$('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset+100 }, 1000);
	  	e.preventDefault();
	});


	/* for WHY CHOOSE US block */
	if($(window).width() <= 1200 && $(window).width() >= 810){
		$(".why-choose-item").slice(2, 4).addClass('flex-dir_row-rev');
	} else if($(window).width() > 1200){
		$(".why-choose-item").slice(3).addClass('flex-dir_row-rev');
	} else {
		$(".why-choose-item").removeClass('flex-dir_row-rev');
	}
	/* === */

	/* navbar mobile toggler */
	$(".topnav-toggler").on('click', function(){
        $('.topnav-list').slideToggle();
    });

    /* testmonials tabs toggler */
    $('.reviewer-photo').on('click', function() {
    	$('.review').removeClass('active');
    	$('.reviewer').removeClass('active');

	    $(this).closest('.reviewer').addClass('active');
	    let index = $(this).closest('.reviewer').index();
	    document.getElementsByClassName('review')[index].classList.add('active');
	});

    $(window).resize(function(){
    	/* for useable view of topmenu */
    	if($(window).width() > 1100){
    		$('.topnav-list').css('display', 'flex');
    	} else{
    		$('.topnav-list').css('display', 'none');
    	}

    	/* for WHY CHOOSE US block */
		if($(window).width() <= 1200 && $(window).width() >= 810){
			$(".why-choose-item").removeClass('flex-dir_row-rev');
			$(".why-choose-item").slice(2, 4).addClass('flex-dir_row-rev');
		} else if($(window).width() > 1200){
			$(".why-choose-item").removeClass('flex-dir_row-rev');
			$(".why-choose-item").slice(3).addClass('flex-dir_row-rev');
		} else {
			$(".why-choose-item").removeClass('flex-dir_row-rev');
		}
		/* === */
    })
})