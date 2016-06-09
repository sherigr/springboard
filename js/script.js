(function($){
	$(function() {

		
  	

  		// Fixed header
		//-----------------------------------------------
		$(window).scroll(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

		$(window).load(function() {
			if (($(".header.fixed").length > 0)) { 
				if(($(this).scrollTop() > 0) && ($(window).width() > 767)) {
					$("body").addClass("fixed-header-on");
				} else {
					$("body").removeClass("fixed-header-on");
				}
			};
		});

				//Scroll Spy
		//-----------------------------------------------
		if($(".scrollspy").length>0) {
			$("body").addClass("scroll-spy");
			$('body').scrollspy({ 
				target: '.scrollspy',
				offset: 155
			});
		}

		// Stellar.js Div
		//-----------------------------------------------
		$.stellar({
			horizontalScrolling: false,
			hideDistantElements: true
		});


		// $('.banner-img').stellar({
		// 	horizontalOffset: 0,
		//   verticalOffset: 0
		// });




		/*==========================================
    FOOTER
  =====================================================*/

  var today = new Date();
  var year = today.getFullYear();

   $('#footer').html('<p>Springboard &copy' + year + '</p>');



	});
})(this.jQuery);