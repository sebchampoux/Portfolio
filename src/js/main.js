import objectFitImages from 'object-fit-images';

import { MainMenu } from './src/MainMenu';
import { ScrollToTop } from './src/ScrollToTop';
import { HeroArea } from './src/HeroArea';

document.addEventListener('DOMContentLoaded', $ => {
	objectFitImages();

	// Temporaire, seulement pour des tests
	var hamburger = document.querySelector('.js-hamburger');
	hamburger.parentNode.addEventListener('click', e => {
		hamburger.classList.toggle('is-active');
	});
});
