import Menu from './src/Menu';
import ScrollToTop from './src/ScrollToTop';
import HeroArea from './src/HeroArea';

jQuery(document).ready($ => {
	const win = $(window);

	// Initialisation des éléments
	Menu.init();
	ScrollToTop.init();
	HeroArea.init();

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
