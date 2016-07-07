(function($){
	$(function() {

		
  	

  		// FIXED HEADER
		//-----------------------------------------------

		$(window).scroll(function() {
			if(($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 100)) {
					$("body").addClass("fixed-header-on");
					$("img.logo-color").attr('src', 'img/springboard75.png');
					$(".springboard-slogan").css({'display':'none'});
				} else {
					$("body").removeClass("fixed-header-on");
					$("img.logo-color").attr('src', 'img/springboard75white.png');
				}
			};
		});


		$(window).load(function() {
			if(($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 100)) {
					$("body").addClass("fixed-header-on");
					$(".springboard-slogan").css({'display':'none'});
				} else {
					$("body").removeClass("fixed-header-on");
					$("img.logo-color").attr('src', 'img/springboard75white.png');
				}
			};
		});

		    // COLLAPSE NAVBAR WHEN LINK IS CLICKED
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });


			//SCROLL SPY
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 140
			});
			$('.noSpy').css({'display':'none'});
		}


		// Stellar.js Div
		//-----------------------------------------------
			if($(window).width() > 768) {
			$.stellar({
				horizontalScrolling: false,
				hideDistantElements: true,
				// responsive: true
			});	
		}


	
			//SMOOTH SCROLL
		//-----------------------------------------------
		$('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });


    // FOOTER
  //---------------------------------------------------

  var today = new Date();
  var year = today.getFullYear();

   $('#footer').html('<p>&copy ' + year + ' Springboard</p>');


	});
})(this.jQuery);