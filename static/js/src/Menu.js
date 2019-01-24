const $ = jQuery;

import SmoothScroll from './SmoothScroll';

/**
 * Pour le menu de navigation principal
 */
export default {
	hamburgerOpenClass: 'is-active',
	mobileBP: 992,
	isMenuOpen: false,
	shadow: {
		apparitionPoint: 100,
		isVisible: false,
		shadowClass: 'main-nav--page-scrolled'
	},

	/**
	 * À mettre dans DOMReady
	 */
	init() {
		// DOM elements
		this.mainNav = $('.js-main-nav');
		this.menuWrapper = $('.js-main-nav__menu-wrapper')
		this.hamburger = $('.js-hamburger');
		this.links = $('.js-main-nav__link');
		this.socialNetworks = $('.js-main-nav__reseaux-sociaux');

		// Récupère la hauteur de la navigation principale
		this.mainNavHeight = this.mainNav.height();

		// Events
		this.hamburger.on('click', this.toggleHamburger.bind(this));

		// SmoothScroll pour les liens où c'est nécessaire
		this.links.each((i, e) => {
			const currentLink = $(e);
			const currentLinkDest = currentLink.attr('href');

			if (currentLinkDest[0] === '#') {
				currentLink.on('click', e => {
					e.preventDefault();
					SmoothScroll.smoothScrollTo(
						currentLinkDest,
						this.mainNavHeight
					);
				});
			}
		});

		// Création des animations
		this.createMenuAnimations();
	},

	/**
	 * Création des animations ouverture/fermeture du menu (on veut juste le faire une fois...)
	 */
	createMenuAnimations() {
		// Ouverture
		this.openingAnim = new TimelineMax({
			paused: true
		});
		this.openingAnim.add(
			TweenMax.from(
				this.menuWrapper,
				0.7,
				{right: '-100%'}
			)
		);
		this.openingAnim.add(
			TweenMax.staggerFrom(
				this.links,
				0.1,
				{left: '100%'},
				0.05
			),
			'-=0.5'
		);
		this.openingAnim.add(
			TweenMax.from(
				this.socialNetworks,
				0.4,
				{left: '100%'}
			),
			'-=0.2'
		);

		// Fermeture
		this.closeAnim = new TimelineMax({
			paused: true
		});
		this.closeAnim.add(
			TweenMax.to(
				this.menuWrapper,
				0.5,
				{right: '-100%'}
			)
		);
	},

	/**
	 * Lors du scroll de la page
	 * @param scrollY {Number} - valeur de ScrollY
	 */
	onPageScroll(scrollY) {
		if (scrollY >= this.shadow.apparitionPoint && !this.shadow.isVisible) {
			this.shadow.isVisible = true;
			this.mainNav.addClass(this.shadow.shadowClass);
		} else if (scrollY <= this.shadow.apparitionPoint && this.shadow.isVisible) {
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
		// Icône hamburger
		this.hamburger.toggleClass(this.hamburgerOpenClass);

		// Menu hamburger
		if(!this.isMenuOpen) {
			this.openingAnim.play(0);
		} else {
			if(this.openingAnim.isActive()) {
				this.openingAnim.pause();
			}
			this.closeAnim.play(0);
		}

		this.isMenuOpen = !this.isMenuOpen;
	},

	/**
	 * Retourne la hauteur de la navigation principale
	 * @returns {Number} Hauteur de la navigation principale
	 */
	getMainNavHeight() {
		return $('.js-main-nav').height();
	}
};