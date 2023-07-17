$('[name="phone"]').mask('+7 999 - 999 - 99 - 99');

// sliders
$('.photo-gallery').slick({
	slidesToShow: 4,
	variableWidth: true,
	centerMode: true,
	infinite: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.services-slider').slick({
	slidesToShow: 3,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.services-shop-slider').slick({
	slidesToShow: 4,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

$('.reviews-slider').slick({
	slidesToShow: 4,
	dots: true,
	prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#prev"></use></svg></button>',
	nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#next"></use></svg></button>'
});

// gallery
Fancybox.bind("[data-fancybox]", {
	// Your custom options
});