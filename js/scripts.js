
$(document).ready(function () {
    $('[data-toggle="popover"]').each(function () {
        var $elem = $(this);
        $elem.popover({
            placement: 'auto',
            trigger: 'hover',
            html: true,
            container: $elem,
            // container: 'body',
            animation: true,
            placement: 'bottom',
	        // container: '.navbar-fixed-top .container',
            //title: 'Name goes here',
            // content: 'This is the popover content. You should be able to mouse over HERE.'
        });
    });

    $('[data-toggle="tooltip"]').tooltip();   


	//Set the Testimonial options
	$('#quote-carousel').carousel({
		pause: true,
		interval: 4000,
	});

	/* close navbar menu when click */
	$('.navbar-collapse a').click(function(){
	    $(".navbar-collapse").collapse('hide');
	});

	/* end of close navbar menu when click */

	/*------ back to the top ------*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 50) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
	// scroll body to 0px on click
	$('#back-to-top').click(function () {
		$('#back-to-top').tooltip('hide');
		$('body,html').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
	$('#back-to-top').tooltip('show');
	/*------ end of back to the top ------*/


});
