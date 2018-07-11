$(function() {

	// Custom JS

	$("#phone").mask("+7 (999) 999-99-99");
	$("#c-img").corner("bite 9px").parent().css('padding', '6px').corner("bite 9px");
	$(".completed-carousel").owlCarousel({
		loop:true,
		margin:18,
		stagePadding:18,
		mergeFit:false,
		nav:true,
		LazyLoad:true,
		navText : ['<i class="fas fa-long-arrow-alt-left"></i>','<i class="fas fa-long-arrow-alt-right"></i>'],
		responsiveClass:true,
		responsive:{
			0:{
				items:1,
				nav:false
			},
			600:{
				items:3
			},
			1000:{
				items:3
			}
		}
	});
});
