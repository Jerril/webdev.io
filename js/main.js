$(document).ready(function(){

	// Carousel
  	$("#heroCarousel").owlCarousel({
	  	animateOut: 'fadeIn',
      animateIn: 'fadeOut',
	  	items: 1,
	  	loop: true,
	  	dots: true,
	  	autoplay: true,
  	});

    $("#tCarousel").owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      nav: true,
      autoplay: true,
      navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>']
    });

    $("#lCarousel").owlCarousel({
      loop: true,
      dots: false,
      nav: false,
      autoplay: true,
      navText: ['<span class="icon-angle-left"></span>', '<span class="icon-angle-right"></span>'],
      responsive : {
          // breakpoint from 0 up
          0 : {
              items: 2,
          },
          // breakpoint from 480 up
          480 : {
              items: 3,
          },
          // breakpoint from 768 up
          768 : {
              items: 4,
          }
      }
    });


  	// main-nav--menu
  	$('.main-nav--menu-btn').on('click', function () {
  		$(this).closest('.main-nav').toggleClass('main-nav--menu-open');
  	});

  	$('.main-nav--menu-close').on('click', function () {
  		$(this).closest('.main-nav').removeClass('main-nav--menu-open');
  	});

    $(window).on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 600) {
        $('.main-nav').addClass('scrolled');
      } else {
        $('.main-nav').removeClass('scrolled');
      }
    });

    // validation
    var myLanguage = {
        errorTitle: 'Form submission failed!',
        requiredFields: 'You have not answered all required fields',
        badEmail: 'Please enter a proper email address',
    };

    $.validate({
        language: myLanguage
    });

    $('#message').restrictLength( $('#max-length-element') );

});