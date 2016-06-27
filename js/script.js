(function($){
	$(function() {

		
  	

  		// Fixed header
		//-----------------------------------------------
		// $(window).scroll(function() {
		// 	if (($(".header.fixed").length > 0)) { 
		// 		if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
		// 			$("body").addClass("fixed-header-on");
		// 		} else {
		// 			$("body").removeClass("fixed-header-on");
		// 		}
		// 	};
		// });


		// $(window).load(function() {
		// 	if (($(".header.fixed").length > 0)) { 
		// 		if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
		// 			$("body").addClass("fixed-header-on");
		// 		} else {
		// 			$("body").removeClass("fixed-header-on");
		// 		}
		// 	};
		// });
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
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
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 100)) {
					$("body").addClass("fixed-header-on");
					$(".springboard-slogan").css({'display':'none'});
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		    // COLLAPSE NAVBAR WHEN LINK IS CLICKED
    $(".navbar-nav li a").click(function(event) {
      $(".navbar-collapse").collapse('hide');
    });

      // Scroll To Top Of Page
    //--------------------------------------------



				//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 140
			});
			// $('.noSpy').css({'visibility':'hidden', 'width':'0%'});
			$('.noSpy').css({'display':'none'});
		}


		// Stellar.js Div
		//-----------------------------------------------
		$.stellar({
			horizontalScrolling: false,
			hideDistantElements: true,
			responsive: true
		});


		// $('.banner-img').stellar({
		// 	horizontalOffset: 0,
		//   verticalOffset: 0
		// });

	
			//Smooth Scroll
		//-----------------------------------------------
		//Smooth Scroll
		//-----------------------------------------------
		if ($(".smooth-scroll").length>0) {
			$('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html,body').animate({
							scrollTop: target.offset().top-151
						}, 1000);
						return false;
					}
				}
			});
		}


   // FOOTER
  //---------------------------------------------------

  var today = new Date();
  var year = today.getFullYear();

   $('#footer').html('<p>Springboard &copy' + year + '</p>');



	});
})(this.jQuery);