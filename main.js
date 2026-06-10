// --- SELEKTORY ---
const toggle = document.querySelector('.navbar__toggle');
const menu = document.querySelector('.navbar_menu');
const scrollTopBtn = document.getElementById('scrollToTopBtn');

// --- OVLÁDÁNÍ BURGER MENU ---
if (toggle && menu) {
	toggle.addEventListener('click', () => {
		const isOpen = menu.classList.toggle('is-open');
		toggle.classList.toggle('is-active');
		toggle.setAttribute('aria-expanded', isOpen);
	});

	document.querySelectorAll('.navbar_link').forEach(link => {
		link.addEventListener('click', () => {
			menu.classList.remove('is-open');
			toggle.classList.remove('is-active');
			toggle.setAttribute('aria-expanded', false);
		});
	});
}

// --- FUNKCE PRO TLAČÍTKO SCROLL TO TOP ---
if (scrollTopBtn) {
	window.addEventListener('scroll', () => {
		if (window.scrollY > 300) {
			scrollTopBtn.classList.add('show');
		} else {
			scrollTopBtn.classList.remove('show');
		}
	});

	scrollTopBtn.addEventListener('click', () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	});
}
