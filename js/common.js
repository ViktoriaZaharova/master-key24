$('[name="phone"]').mask('+7 999 - 999 - 99 - 99');

// sliders
$('.photo-gallery').slick({
	slidesToShow: 4,
	variableWidth: true,
	centerMode: true,
	infinite: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				dots: true
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				variableWidth: false,
				centerMode: false,
				dots: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false,
				dots: true,
				variableWidth: false,
				centerMode: false,
			}
		}
	]
});

$('.services-slider').slick({
	slidesToShow: 3,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}
	]
});

$('.services-shop-slider').slick({
	slidesToShow: 4,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}
	]
});

$('.reviews-slider').slick({
	slidesToShow: 4,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>',
	responsive: [
		{
			breakpoint: 1200,
			settings: {
				variableWidth: true,
			}
		},
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1,
				arrows: false
			}
		}
	]
});

// gallery
Fancybox.bind("[data-fancybox]", {
	// Your custom options
});


(function ($) {
	$(window).resize(function () {
		if ($(this).width() > 576) {
			$('.horizontal-scroll').mCustomScrollbar("destroy"); //destroy scrollbar 
		} else {
			$('.horizontal-scroll').mCustomScrollbar({
				axis: "x",
				theme: "my-theme",
				scrollButtons: false
			}); 
		}
	}).trigger("resize");
})(jQuery);