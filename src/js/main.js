import objectFitImages from 'object-fit-images';

import { HomePage } from './src/Homepage';

document.addEventListener('DOMContentLoaded', $ => {
	objectFitImages();

	// Temporaire, seulement pour des tests
	var hamburger = document.querySelector('.js-hamburger');
	hamburger.parentNode.addEventListener('click', e => {
		hamburger.classList.toggle('is-active');
	});

	// Initialisation des éléments
	const home = new HomePage('Sébastien', 21);
});
