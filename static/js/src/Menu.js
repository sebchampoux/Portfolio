const $ = jQuery;

/**
 * Pour le menu de navigation principal
 */
export default {
	shadow: {
		apparitionPoint: 200,
		isVisible: false,
		shadowClass: 'main-nav--page-scrolled'
	},

	hamburgerOpenClass: 'is-active',

	/**
	 * À mettre dans DOMReady
	 */
	init() {
		// DOM elements
		this.mainNav = $('.js-main-nav');
		this.hamburger = $('.js-hamburger');

		// Events
		this.hamburger.on('click', this.toggleHamburger.bind(this));
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
	}
};