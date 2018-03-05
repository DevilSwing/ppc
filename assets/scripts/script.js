$(document).ready(function() {
	let backgrounds = [
		'bg-1.jpg',
		'bg-2.jpg',
		'bg-3.jpg',
		'bg-4.jpg'
	];

	let modalToggler = $('.js-modal-toggler'),
		modal = $('.modal'),
		mobileNav = $('.mobile-nav');
		modalElems = [
			'.js-icon-mail'
			'.js-icon-vk'
			'.js-icon-github'
			'.modal-map'
			'.modal-toggler'
		]



	$('#particles-js').css({
		'background-image': 'url(./assets/images/' + backgrounds[Math.floor(Math.random() * (4 - 0) + 0)] + ')'
	})

	$('.nav-toggler').click(function(){
		mobileNav.toggleClass('-is-open');
	})

	setTimeout(function(){
		$('.section-main h1').addClass('-animated');
		$('.section-main h2').addClass('-animated');
	}, 1000);

	modalToggler.click(function($event) {
		event.preventDefault();
		modal.toggleClass('-active');
	})
});