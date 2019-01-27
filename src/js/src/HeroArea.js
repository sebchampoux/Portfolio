const $ = jQuery;

import SmoothScroll from './SmoothScroll';
import Menu from './Menu';

/**
 * Pour la zone hero de la page d'accueil
 */
export default {
	/**
	 * À mettre dans DOMReady
	 */
	init() {
		this.projectsButton = $('.js-hero-area__button');
		const navHeight = Menu.getMainNavHeight();
		const target = this.projectsButton.attr('href');

		// Clic sur le bouton "Mes projets"
		this.projectsButton.on('click', e => {
			e.preventDefault();
			SmoothScroll.smoothScrollTo(
				target,
				navHeight
			);
		});
	}
};