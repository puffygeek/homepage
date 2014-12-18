jQuery(function($) {'use strict',
	//#main-slider
	$(function(){
		$('#main-slider').carousel({
			interval: 5000
		});
	});

	//Initiat WOW JS
	new WOW().init();

	// portfolio filter
	$(window).load(function(){'use strict';
		var $portfolio_selectors = $('.portfolio-filter >li>a');
		var $portfolio = $('.portfolio-items');
		$portfolio.isotope({
			itemSelector : '.portfolio-item',
			layoutMode : 'fitRows'
		});
		
		$portfolio_selectors.on('click', function(){
			$portfolio_selectors.removeClass('active');
			$(this).addClass('active');
			var selector = $(this).attr('data-filter');
			$portfolio.isotope({ filter: selector });
			return false;
		});
	});

	//goto top
	$("[data-scroll-to]").click(function(){		
		pos = $($(this).attr('data-scroll-to')).offset().top - $(header).height();
		$('html, body').animate({
			scrollTop: pos
		}, 1000);
	});

	//sticky header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) $('header').addClass("sticky");
		else $('header').removeClass("sticky");

		if (isScrolledIntoView("#main")) setActiveMenue("#li-main");
		else if (isScrolledIntoView("#services")) setActiveMenue("#li-services");
		else if (isScrolledIntoView("#portfolio")) setActiveMenue("#li-portfolio");		
		else if (isScrolledIntoView("#about")) setActiveMenue("#li-about");
		else if (isScrolledIntoView("#press")) setActiveMenue("#li-press");
		else if (isScrolledIntoView("#pricing")) setActiveMenue("#li-pricing");
		else if (isScrolledIntoView("#conatcat-info")) setActiveMenue("#li-contact"); 
	});
	
});

function setActiveMenue(item){
	$(".navbar-nav li").removeClass("active");
	$(item).addClass("active");
}

function isScrolledIntoView(elem){
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewBottom) && (elemTop <= docViewTop)) || ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}