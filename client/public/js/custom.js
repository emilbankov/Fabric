var widthClassOptions = [];
var widthClassOptions = ({
	bestseller: 'bestseller_default_width',
	featured: 'featured_default_width',
	special: 'special_default_width',
	latest: 'latest_default_width',
	related: 'related_default_width',
	additional: 'additional_default_width',
	tabbestseller: 'tabbestseller_default_width',
	tabfeatured: 'tabfeatured_default_width',
	tabspecial: 'tabspecial_default_width',
	tablatest: 'tablatest_default_width',
	related: 'related_default_width',
	additional: 'additional_default_width',
	module: 'module_default_width',
	blog: 'blog_default_width',
	testimonial: 'testimonial_default_width',
	categorytab: 'categorytab_default_width',
	productcategory0: 'productcategory0_default_width',
	productcategory1: 'productcategory1_default_width',
	productcategory2: 'productcategory2_default_width'
});

$(document).ready(function () {
	$('#wdtestimonial-carousel').owlCarousel({
		items: 1,
		singleItem: false,
		autoPlay: true,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left fa-5x"></i>', '<i class="fa fa-angle-right fa-5x"></i>'],
		pagination: true,
		itemsDesktop: [1000, 1],
		itemsDesktopSmall: [979, 1],
		itemsTablet: [767, 1]
	});

	$('.category-list-carousel').owlCarousel({
		items: 3,
		autoPlay: false,
		dots: false,
		onmouseover: true,
		autoplaySpeed: 700,
		smartSpeed: 450,
		rtl: false,
		loop: true,
		singleItem: false,
		navigation: true,
		navigationText: ['<i class="fa fa-chevron-left fa-5x"></i>', '<i class="fa fa-chevron-right fa-5x"></i>'],
		pagination: false,
		itemsDesktop: [1500, 3],
		itemsDesktopSmall: [1199, 3],
		itemsTablet: [991, 2],
		itemsTabletSmall: [543, 1],
		itemsMobile: [480, 1]
	});

});

$(document).ready(function () {


	// /*bx slider for vertical blog */
	// $('.webdigifyblog .box-product').bxSlider({
	// 	mode: 'horizontal',
	// 	auto:true,
	// 	hideControlOnEnd:true,
	// 	touchEnabled:false,
	// 	minSlides:2,
	// 	slideMargin:0,
	// 	slideWidth:500
	//  });

	// $('#content select, .header-search select').customSelect();
	$('ul.breadcrumb').prependTo('#content');
	/* Responsive touch and hover manage  
	$( '#menu li:has(ul)' ).doubleTapToGo(); */
	$('#content h1').prependTo('.row .page-title');
	$('#content h2').prependTo('.row .page-title');

	$('.top_level:odd').addClass('odd');
	$('.top_level:even').addClass('even');

	/* search */
	$('#searchbox select[name=\'category_id\']').click(function () {

		$(this).toggleClass('active');

	});

	// $("#cart .dropdown-toggle").click(function () {
	// 	$(this).toggleClass("active");
	// 	$(".cart-menu").slideToggle("slow");
	// 	$(".myaccount-menu").slideUp("slow");
	// 	/*$(".language-menu").slideUp("slow");
	// 	$(".currency-menu").slideUp("slow");*/
	// 	$(".myaccount .dropdown-toggle").removeClass('active');
	// 	$(".menu_toggle").slideUp("slow");
	// 	return false;
	// });

	$("#form-currency .dropdown-toggle").click(function () {
		$('#form-currency').toggleClass("active");
		$(".language-menu").slideUp("slow");
		$(".currency-menu").slideToggle("slow");
		$(".cart-menu").slideUp("slow");
		// $(".myaccount-menu").slideUp("slow");
		// $(".myaccount > .dropdown-toggle").removeClass('active');
		$(".menu_toggle").slideUp("slow");
		// $("#search").slideUp("slow");
		//$(".header-search.dropdown-toggle").removeClass('active');
		return false;
	});

	$("#form-language .dropdown-toggle").click(function () {
		$('#form-language').toggleClass("active");
		$(".currency-menu").slideUp("slow");
		$(".language-menu").slideToggle("slow");
		$(".cart-menu").slideUp("slow");
		// $(".myaccount-menu").slideUp("slow");
		// $(".myaccount > .dropdown-toggle").removeClass('active');
		$(".menu_toggle").slideUp("slow");
		// $("#search").slideUp("slow");
		//$(".header-search.dropdown-toggle").removeClass('active');
		return false;
	});

	$(".myaccount > .dropdown-toggle").click(function () {
		$(".cart-menu").slideUp("slow");
		$(".myaccount-menu").slideToggle("slow");
		$(".language-menu").slideUp("slow");
		$(".currency-menu").slideUp("slow");
		$(this).toggleClass("active");
		$("#cart .dropdown-toggle").removeClass('active');
		$(".menu_toggle").slideUp("slow");
		return false;
	});
});

$(document).click(function () {
	$(".myaccount-menu").slideUp('slow');
	$(".language-menu").slideUp("slow");
	$(".currency-menu").slideUp("slow");
});

jQuery(document).ready(function () {
	$('.write-review, .review-count').on('click', function () {
		$('html, body').animate({ scrollTop: $('#tabs_info').offset().top }, 'slow');
	});

});
/*======  Add Item in Menu ==== */
jQuery(document).ready(function () {
	$('ul.box-category > li').addClass('main');
	var wi = 1;
	$('ul.box-category li.main').each(function () {
		$(this).addClass('menu-' + wi);
		wi = wi + 1;

	});


});

/* JS FOR FILTER */

function leftFilter() {
	if ($(window).width() <= 767) {
		$('#column-left .filterbox').appendTo('.row #content .category_list');
		$('#column-right .filterbox').appendTo('.row #content .category_list');
	} else {
		$('.row #content .category_list .filterbox').appendTo('#column-left .sidebarFilter');
		$('.row #content .category_list .filterbox').appendTo('#column-right .sidebarFilter');
	}
}
$(document).ready(function () { leftFilter(); });
$(window).resize(function () { leftFilter(); });

function mobileToggleMenu() {
	//alert($(window).width());
	if ($(window).width() < 980) {
		$("#footer .mobile_togglemenu").remove();
		$("#footer .column h5").append("<a class='mobile_togglemenu'>&nbsp;</a>");
		$("#footer .column h5").addClass('toggle');
		$("#footer .column h6").append("<a class='mobile_togglemenu'>&nbsp;</a>");
		$("#footer .column h6").addClass('toggle');
		$("#footer .mobile_togglemenu").click(function () {
			$(this).toggleClass('active');
			$(this).parent().toggleClass('active').parent().find('ul').toggle('slow');
			$(this).parent().toggleClass('active').parent().find('.owl-wrapper-outer').toggle('slow');
		});

	} else {
		$("#footer .column h5").parent().find('ul').removeAttr('style');
		$("#footer .column h5").parent().find('.owl-wrapper-outer').removeAttr('style');
		$("#footer .column h5").removeClass('active');
		$("#footer .column h5").removeClass('toggle');
		$("#footer .column h6").parent().find('ul').removeAttr('style');
		$("#footer .column h6").removeClass('active');
		$("#footer .column h6").removeClass('toggle');
		$("#footer .mobile_togglemenu").remove();
	}
}
$(document).ready(function () { mobileToggleMenu(); });
$(window).resize(function () { mobileToggleMenu(); });


function menuResponsive() {
	//alert($(window).width());
	if ($(window).width() < 980) {
		$('.nav.navbar-nav').css('display', 'none');
		$("#menu").addClass('responsive-menu');
		$("#menu").removeClass('main-menu');
		$('.nav-responsive').css('display', 'block');
		$("#menu .mobile_togglemenu").remove();
		$("#menu ul li.dropdown").append("<a class='mobile_togglemenu'>&nbsp;</a>");
		$("#menu ul li.dropdown").addClass('toggle');

		$("#menu .nav > li.dropdown .mobile_togglemenu").click(function () {
			$(this).parent().toggleClass('active');
			$(this).siblings("li .dropdown-menu").slideToggle('slow');
		});

	} else {
		$("#menu").addClass('main-menu');
		$("#menu").removeClass('responsive-menu');
		$("#menu ul li.dropdown").parent().find('li .dropdown-menu').removeAttr('style');
		$("#menu ul li.dropdown").removeClass('active');
		$("#menu ul li.dropdown").removeClass('toggle');
		$("#menu .mobile_togglemenu").remove();
		$('.nav-responsive').css('display', 'none');
		$('.nav.navbar-nav').css('display', 'block');
	}
}
$(document).ready(function () { menuResponsive(); });
$(window).resize(function () { menuResponsive(); });



$(document).ready(function () {
	$(".dropdown-toggle").click(function () {
		$("ul.dropdown-toggle").toggle('slow');
	});
});


function LangCurDropDown(selector, subsel) {
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function () {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function () {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
			$(selector).removeClass('active');
		}, 3000);
	});

	$(subsel).hover(function () {
		setTimeout(function () {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
		}, 3000);
	});
}


$(document).ready(function () {

	/*LangCurDropDown('.myaccount','.myaccount-menu');*/
	// LangCurDropDown('#currency','.currency-menu');
	// LangCurDropDown('#language','.language-menu');
	/*LangCurDropDown('#cart','.cart-menu');*/

});



function leftright() {
	if ($(window).width() < 980) {
		if ($('.category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1').hasClass('text-right') == true) {
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").addClass('text-left');
			$(".category_filter .col-md-3, .category_filter .col-md-2, .category_filter .col-md-1").removeClass('text-right');
		}
	}
}

$(document).ready(function () { leftright(); });
$(window).resize(function () { leftright(); });



// function headerTopFixed() {	
// if (jQuery(window).width() > 979){
// if (jQuery(this).scrollTop() > 100)
// {    
// jQuery('.header_bottom').addClass("fixed");

// }else{
// jQuery('.header_bottom').removeClass("fixed");

// }
// } else {
// jQuery('.header_bottom').removeClass("fixed");

// }
// }

// $(document).ready(function(){headerTopFixed();});
// jQuery(window).resize(function() {headerTopFixed();});
// jQuery(window).scroll(function() {headerTopFixed();});

/*end fied*/

//LEFT-RIGHT COLUMN RESPONSIVE TOOGLE

function mobileToggleColumn() {
	if ($(window).width() < 980) {
		$('#column-left,#column-right').appendTo('.home_row');
		$('#column-left,#column-right').insertAfter('#content');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
		$("#column-left .box-heading,#column-right .box-heading").append("<a class='mobile_togglemenu'>&nbsp;</a>");
		$("#column-left .box-heading,#column-right .box-heading").addClass('toggle');
		$('.header_center .header-cartright').insertAfter('.header_bottom .nav-container .main-menu');
		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").click(function () {
			$(this).parent().toggleClass('active').parent().find('.box-content,.filterbox,.list-group').slideToggle('slow');
		});
	} else {
		$('#column-left').prependTo('.home_row');
		$('#column-right').appendTo('.home_row');
		$('#column-left').insertBefore('#content');
		$('#column-right').insertAfter('#content');
		$('.common-home #column-left,.common-home #column-right').insertBefore('#content-top');
		$("#column-left .box-heading,#column-right .box-heading").parent().find('.box-content,.filterbox,.list-group').removeAttr('style');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('active');
		$("#column-left .box-heading,#column-right .box-heading").removeClass('toggle');
		$('.header-cartright').appendTo('.header_top .header_center');

		$("#column-left .box-heading .mobile_togglemenu,#column-right .box-heading .mobile_togglemenu").remove();
	}
}
$(document).ready(function () { mobileToggleColumn(); });
$(window).resize(function () { mobileToggleColumn(); });


function productCarouselAutoSet() {
	$("#content .product-carousel, .banners-slider-carousel .product-carousel, .homepage-testimonials-inner .product-carousel, #products-related .product-carousel").each(function () {
		var objectID = $(this).attr('id');
		var myObject = objectID.replace('-carousel', '');
		if (myObject.indexOf("-") >= 0)
			myObject = myObject.substring(0, myObject.indexOf("-"));
		if (widthClassOptions[myObject])
			var myDefClass = widthClassOptions[myObject];
		else
			var myDefClass = 'grid_default_width';
		var slider = $("#content #" + objectID + ", .banners-slider-carousel #" + objectID + ", .homepage-testimonials-inner #" + objectID + ", #products-related #" + objectID);
		slider.sliderCarousel({
			defWidthClss: myDefClass,
			subElement: '.slider-item',
			subClass: 'product-block',
			firstClass: 'first_item_tm',
			lastClass: 'last_item_tm',
			slideSpeed: 200,
			paginationSpeed: 800,
			autoPlay: false,
			stopOnHover: false,
			goToFirst: true,
			goToFirstSpeed: 1000,
			goToFirstNav: true,
			pagination: false,
			paginationNumbers: false,
			responsive: true,
			responsiveRefreshRate: 200,
			baseClass: "slider-carousel",
			theme: "slider-theme",
			autoHeight: true
		});

		var nextButton = $(this).parent().find('.next');
		var prevButton = $(this).parent().find('.prev');
		nextButton.click(function () {
			slider.trigger('slider.next');
		})
		prevButton.click(function () {
			slider.trigger('slider.prev');
		})
	});
}
//$(window).load(function(){productCarouselAutoSet();});
$(document).ready(function () { productCarouselAutoSet(); });



function productListAutoSet() {
	$("#content .productbox-grid").each(function () {
		var objectID = $(this).attr('id');
		if (objectID.length > 0) {
			if (widthClassOptions[objectID.replace('-grid', '')])
				var myDefClass = widthClassOptions[objectID.replace('-grid', '')];
		} else {
			var myDefClass = 'grid_default_width';
		}
		$(this).smartColumnsRows({
			defWidthClss: myDefClass,
			subElement: '.product-items',
			subClass: 'product-block'
		});
	});
}
$(window).load(function () { productListAutoSet(); });
$(window).resize(function () { productListAutoSet(); });


function HoverWatcher(selector) {
	this.hovering = false;
	var self = this;

	this.isHoveringOver = function () {
		return self.hovering;
	}

	$(selector).hover(function () {
		self.hovering = true;
	}, function () {
		self.hovering = false;
	})
}

function LangCurDropDown(selector, subsel) {
	var main_block = new HoverWatcher(selector);
	var sub_ul = new HoverWatcher(subsel);
	$(selector).click(function () {
		$(selector).addClass('active');
		$(subsel).slideToggle('slow');
		setTimeout(function () {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
			$(selector).removeClass('active');
		}, 3000);
	});

	$(subsel).hover(function () {
		setTimeout(function () {
			if (!main_block.isHoveringOver() && !sub_ul.isHoveringOver())
				$(subsel).stop(true, true).slideUp(450);
		}, 3000);
	});
}





function menuResponsive() {

	if ($(window).width() <= 979) {
		//alert($(window).width());
		$('.nav-responsive').css('display', 'block');
		if ($('.main-navigation').hasClass('treeview') != true) {
			$("#res-menu").addClass('responsive-menu');
			$("#res-menu").removeClass('main-menu');
			$("#res-menu .main-navigation").treeview({
				animated: "slow",
				collapsed: true,
				unique: true
			});
			$('#res-menu .main-navigation a.active').parent().removeClass('expandable');
			$('#res-menu .main-navigation a.active').parent().addClass('collapsable');
			$('#res-menu .main-navigation .collapsable ul').css('display', 'block');
			$('#res-menu .main-navigation').append($('#static-menu .toplink').removeClass('.toplink'));
		}

	} else {
		$("#res-menu .hitarea").remove();
		$("#res-menu").removeClass('responsive-menu');
		$("#res-menu").addClass('main-menu');
		$(".main-navigation").removeClass('treeview');
		$("#res-menu ul").removeAttr('style');
		$('#res-menu li').removeClass('expandable');
		$('#res-menu li').removeClass('collapsable');
		$('.nav-responsive').css('display', 'none');
		$('#static-menu').append($('#res-menu .main-navigation .toplink').removeClass('.toplink'));
	}

}
$(document).ready(function () { menuResponsive(); });
$(window).resize(function () { menuResponsive(); });


$(document).ready(function () {
	$(".tm_headerlinks_inner").click(function () {
		$(".header_links").toggle('slow');
	});

});


function Search_Res() {
	if (jQuery(window).width() < 480) {


		$('#searchbox').appendTo('.header-search');

		$(".search").click(function () {
			$('#searchbox').slideToggle('slow', function () {
			});
			$('#searchbox .input-lg').attr('autofocus', 'autofocus').focus();
			$('.search').toggleClass('active');
		});
	}


	else { $('#searchbox').appendTo('.searchtoggle'); }

}

$(document).ready(function () { Search_Res(); });
$(window).resize(function () { Search_Res(); });

/*More menu
$(document).ready(function(){
jQuery(function($){

var max_elem = 11;

if($(window).width() <1260){ max_elem = 10;}

if($(window).width() <=1199){ max_elem = 10;}

var items = $('#nav-one > li');
var surplus = items.slice(max_elem, items.length);
surplus.wrapAll('<li class="hassub hidden_menu"><div class="categorybg more"><ul>');
$('.hidden_menu').prepend('<a href="#" class="activSub">More</a>');


});
});*/

/*More Category*/
$(document).ready(function () {
	if ($(window).width() > 979) {
		jQuery(function ($) {
			var max_elem = 13;
			//$('.navbar-nav li').first().addClass('home_first');
			var items = $('.box-content-category #nav-one li.top_level');
			var surplus = items.slice(max_elem, items.length);
			surplus.wrapAll('<li class="main hiden_menu"><ul class="dropdown-inner">');
			$('.hiden_menu').append('<span class="main">More</span>');
			$('.hiden_menu .main').click(function () {
				var $this = $(this);
				$this.toggleClass('active');
				if ($this.hasClass('active')) {
					$this.text('Less');
				} else {
					$this.text('More');
				}
				$(".hiden_menu .dropdown-inner").slideToggle(800);
			});

		});
	}

});

/* end of more category */

// $(document).ready(function(){	    
// if ($(window).width() > 979) {
// jQuery(function($){
// var max_elem = 11 ;
// //$('.navbar-nav li').first().addClass('home_first');
// var items = $('#content .category .box-category  li.main');
// var surplus = items.slice(max_elem, items.length);
// surplus.wrapAll('<li class="main hiden_menu"><ul class="dropdown-inner">');
// $('.hiden_menu').append('<span class="main">More Categories</span>');	
// $('.hiden_menu .main').click(function(){
// var $this = $(this);
// $this.toggleClass('active');
// if($this.hasClass('active')){
// $this.text('Less Categories');         
// } else {
// $this.text('More Categories');
// }	
// $(".hiden_menu .dropdown-inner").slideToggle(800); });

// });
// }

/*For Grid and List View Buttons*/
function gridlistactive() {
	$('.btn-list-grid button').on('click', function () {
		if ($(this).hasClass('grid')) {
			$('.btn-list-grid button').addClass('active');
			$('.btn-list-grid button.list').removeClass('active');
		}
		else if ($(this).hasClass('list')) {
			$('.btn-list-grid button').addClass('active');
			$('.btn-list-grid button.grid').removeClass('active');
		}
	});
}
$(document).ready(function () { gridlistactive() });
$(window).resize(function () { gridlistactive() });



/*For Back to Top button*/
$(document).ready(function () {
	$("body").append("<a class='top_button' title='Back To Top' href=''>TOP</a>");

	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 70) {
				$('.top_button').fadeIn();
			} else {
				$('.top_button').fadeOut();
			}
		});
		// scroll body to 0px on click
		$('.top_button').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});
});

// $(document).ready(function(){
// 	$(".box-category-top").click(function(){
//     $('.box-category-top').toggleClass('active');
// 	$(".box-content-category").slideToggle(800);
// 	});
// });


function searchtoggle() {
	if ($(window).width() < 980) {
		$(".search").click(function () {
			$('#searchbox').slideToggle('slow', function () {
			});
			$('#searchbox .input-lg').attr('autofocus', 'autofocus').focus();
			//$('#searchbox').css('display','none');
			$('.search').toggleClass('active');
			event.stopPropagation();
		});
	}


	else {
		$('#searchbox').appendTo('.searchtoggle');
		//$('#searchbox').css('display','block'); 
	}

}

$(document).ready(function () { searchtoggle(); });
$(window).resize(function () { searchtoggle(); });


// Countdown
function timecounter() {
	$('.countbox.hastime').each(function () {
		var countTime = $(this).attr('data-countdown');
		//console.log(countTime);

		$(this).countdown(countTime, function (event) {
			$(this).html(
				'<span class="timebox day"><span class="timebox-inner"><strong>' + event.strftime('%D') + '</strong><span class="time day">days</span></span></span><span class="timebox hour"><span class="timebox-inner"><strong>' + event.strftime('%H') + '</strong><span class="time hour">hours</span></span></span><span class="timebox minute"><span class="timebox-inner"><strong>' + event.strftime('%M') + '</strong><span class="time min">mins</span></span></span><span class="timebox second"><span class="timebox-inner"><strong>' + event.strftime('%S') + '</strong><span class="time sec">secs</span></span></span>'
			);
		});
		//$(this).countdown('stop');
	});
}
$(window).load(function () {
	timecounter()
});
$(window).resize(function () {
	timecounter()
});

$('#slideshow0').swiper({
	mode: 'horizontal',
	slidesPerView: 1,
	pagination: '.slideshow0',
	paginationClickable: true,
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	spaceBetween: 0,
	autoplay: false,//2500,
	autoplayDisableOnInteraction: true,
	loop: true,
	effect: 'fade'
});

$(window).load(function () {
	$("#spinner").fadeOut("slow");
});

$(document).ready(function () {
	if ($.fn.tabs) {
		$('#tabs a').tabs();
	}
});
$(document).ready(function () {
	$('.blogcarousel').owlCarousel({
		items: 3,
		singleItem: false,
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left fa-5x"></i>', '<i class="fa fa-angle-right fa-5x"></i>'],
		pagination: true,
		itemsDesktop: [1000, 3],
		itemsDesktopSmall: [979, 2],
		itemsTablet: [767, 2]
	});
});

function subscribe() {
	var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var email = $('#txtemail').val();
	if (email != "") {
		if (!emailpattern.test(email)) {
			$('.text-danger').remove();
			var str = '<span class="error">Invalid Email</span>';
			$('#txtemail').after('<div class="text-danger">Invalid Email</div>');

			return false;
		}
		else {
			$.ajax({
				url: 'index.php?route=extension/module/newsletters/news',
				type: 'post',
				data: 'email=' + $('#txtemail').val(),
				dataType: 'json',


				success: function (json) {

					$('.text-danger').remove();
					$('#txtemail').after('<div class="text-danger">' + json.message + '</div>');

				}

			});
			return false;
		}
	}
	else {
		$('.text-danger').remove();
		$('#txtemail').after('<div class="text-danger">Email Is Require</div>');
		$(email).focus();

		return false;
	}
}
