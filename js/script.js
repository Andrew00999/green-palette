// Swiper Feedbacks Slider
const swiper = new Swiper('.mySwiper', {
	navigation: {
		nextEl: '.next-feedback',
		prevEl: '.prev-feedback',
	},
	breakpoints: {
		640: {
			slidesPerView: 1,
		},
		1024: {
			slidesPerView: 2,
		},
		1920: {
			slidesPerView: 2,
		},
	},
	loop: true,
});

// Swiper Team Slider
const teamSwiper = new Swiper('.teamSlider', {
	navigation: {
		nextEl: '.teamSlider-next',
		prevEl: '.teamSlider-prev',
	},
	breakpoints: {
		660: {
			slidesPerView: 1,
		},
	},
	loop: true,
	slidesPerView: 1.5,
});

// Accordeon in questions section
const accordeonTitles = document.querySelectorAll('.accordeon-title');

accordeonTitles.forEach(item => {
	item.addEventListener('click', () => {
		const parent = item.parentNode;

		if (parent.classList.contains('questions__accordeon-item--active')) {
			parent.classList.remove('questions__accordeon-item--active');
		} else {
			accordeonTitles.forEach(el => {
				el.parentNode.classList.remove('questions__accordeon-item--active');
			});
			parent.classList.add('questions__accordeon-item--active');
		}
	});
});

// Burger tablet/mobile menu
const hamMenu = document.querySelector('.ham-menu'),
	offScreenMenu = document.querySelector('.off-screen-mobile-menu');

hamMenu.addEventListener('click', event => {
	hamMenu.classList.toggle('active');
	offScreenMenu.classList.toggle('active');

	if (offScreenMenu.classList.contains('active')) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'scroll';
	}
});

offScreenMenu.addEventListener('click', event => {
	if (event.target !== offScreenMenu) {
		hamMenu.classList.remove('active');
		offScreenMenu.classList.remove('active');
	}
});
