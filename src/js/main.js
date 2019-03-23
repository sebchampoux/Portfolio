import objectFitImages from 'object-fit-images';

import Menu from './src/Menu';
import ScrollToTop from './src/ScrollToTop';
import HeroArea from './src/HeroArea';
import { PageTransitions } from "./src/PageTransitions";

jQuery(document).ready($ => {
	const win = $(window);

	objectFitImages();

	// Initialisation des éléments
	Menu.init();
	ScrollToTop.init();
	HeroArea.init();
	const pageTransitions = new PageTransitions();

	// Évènements scroll
	win.on('scroll', e => {
		const scrollY = e.currentTarget.scrollY;
		Menu.onPageScroll(scrollY);
		ScrollToTop.onPageScroll(scrollY);
	});

	// Évènements resize
	win.on('resize', e => {
		const width = e.currentTarget.innerWidth;
		Menu.onPageResize(width);
	});
});
