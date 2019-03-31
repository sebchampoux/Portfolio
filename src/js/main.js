import objectFitImages from 'object-fit-images';

import { MainMenu } from './src/MainMenu';
import { ScrollToTop } from './src/ScrollToTop';
import { HeroArea } from './src/HeroArea';

jQuery(document).ready($ => {
	const win = $(window);

	objectFitImages();

	// Initialisation des éléments
	const mainMenu = new MainMenu();
	const scrollToTop = new ScrollToTop();
	const heroArea = new HeroArea(mainMenu);

	// Évènements scroll
	win.on('scroll', e => {
		const scrollY = e.currentTarget.scrollY;
		mainMenu.onPageScroll(scrollY);
		scrollToTop.onPageScroll(scrollY);
	});

	// Évènements resize
	win.on('resize', e => {
		const width = e.currentTarget.innerWidth;
		mainMenu.onPageResize(width);
	});
});
