const $ = jQuery;

import SmoothScroll from './SmoothScroll';

/**
 * Pour le menu de navigation principal
 */
export default {
	hamburgerOpenClass: 'is-active',
	shadow: {
		apparitionPoint: 200,
		isVisible: false,
		shadowClass: 'main-nav--page-scrolled'
	},

	/**
	 * À mettre dans DOMReady
	 */
	init() {
		// DOM elements
		this.mainNav = $('.js-main-nav');
		this.hamburger = $('.js-hamburger');
		this.links = $('.js-main-nav__link');

		// Récupère la hauteur de la navigation principale
		this.mainNavHeight = this.mainNav.height();

		// Events
		this.hamburger.on('click', this.toggleHamburger.bind(this));

		// SmoothScroll pour les liens où c'est nécessaire
		this.links.each((i, e) => {
			const currentLink = $(e);
			const currentLinkDest = currentLink.attr('href');

			if(currentLinkDest[0] === '#') {
				currentLink.on('click', e => {
					e.preventDefault();
					SmoothScroll.smoothScrollTo(
						currentLinkDest,
						this.mainNavHeight
					);
				});
			}
		});
	},

	/**
	 * Lors du scroll de la page
	 * @param scrollY {Number} - valeur de ScrollY
	 */
	onPageScroll(scrollY) {
		if(scrollY >= this.shadow.apparitionPoint && !this.shadow.isVisible) {
			this.shadow.isVisible = true;
			this.mainNav.addClass(this.shadow.shadowClass);
		} else if(scrollY <= this.shadow.apparitionPoint && this.shadow.isVisible) {
			this.shadow.isVisible = false;
			this.mainNav.removeClass(this.shadow.shadowClass);
		}
	},

	/**
	 * Lors du resize de la page
	 * @param innerWidth {Number} - Largeur interne de la fenêtre
	 */
	onPageResize(innerWidth) {

	},

	/**
	 * Ouvre/ferme menu hamburger
	 */
	toggleHamburger() {
		this.hamburger.toggleClass(this.hamburgerOpenClass);
	},

	/**
	 * Retourne la hauteur de la navigation principale
	 * @returns {Number} Hauteur de la navigation principale
	 */
	getMainNavHeight() {
		return $('.js-main-nav').height();
	}
};