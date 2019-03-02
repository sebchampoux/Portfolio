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
		this.menuWrapper = $('.js-main-nav__menu-wrapper');
		this.hamburger = $('.js-hamburger');
		this.links = $('.js-main-nav__link');
		this.socialNetworks = $('.js-main-nav__reseaux-sociaux');

		// Récupère la hauteur de la navigation principale
		this.mainNavHeight = this.mainNav.height();

		// Page scrollée à l'ouverture ?
		if (window.scrollY >= this.shadow.apparitionPoint) {
			this.toggleMenuShadow(true);
		}

		// Menu mobile dès l'ouverture ?
		if (window.innerWidth <= this.mobileBP) {
			this.createMenuAnimations();
		}

		// Events
		this.hamburger.on('click', this.toggleHamburger.bind(this));

		// SmoothScroll pour les ancres
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

					// Si mobile, on ferme le menu après un clic
					if(window.innerWidth <= this.mobileBP) {
						this.toggleHamburger();
					}
				});
			}
		});
	},

	/**
	 * Création des animations ouverture/fermeture du menu (on veut juste le faire une fois...)
	 */
	createMenuAnimations() {
		// Si les animations ont déjà été créées, on veut pas les refaire
		if(this.openingAnim !== undefined && this.closeAnim !== undefined) return;

		// Ouverture
		this.openingAnim = new TimelineMax({
			paused: true
		});
		this.openingAnim.add(
			TweenMax.to(
				this.menuWrapper,
				0.7,
				{right: '0'}
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
				0.7,
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
			this.toggleMenuShadow(true);
		} else if (scrollY <= this.shadow.apparitionPoint && this.shadow.isVisible) {
			this.toggleMenuShadow(false);
		}
	},

	/**
	 * Cache ou ferme l'ombre du menu
	 * @param show {Boolean} - Rendre visible ou cacher l'ombre
	 */
	toggleMenuShadow(show = false) {
		if (show) {
			this.shadow.isVisible = true;
			this.mainNav.addClass(this.shadow.shadowClass);
		} else {
			this.shadow.isVisible = false;
			this.mainNav.removeClass(this.shadow.shadowClass);
		}
	},

	/**
	 * Lors du resize de la page
	 * @param innerWidth {Number} - Largeur interne de la fenêtre
	 */
	onPageResize(innerWidth) {
		if (innerWidth >= this.mobileBP) {
			this.resetMenu();
		} else {
			this.createMenuAnimations();
		}
	},

	/**
	 * Remet le menu à zéro lors du retour au desktop
	 */
	resetMenu() {
		this.links.each((i, e) => $(e).attr({'style': ''}));
	},

	/**
	 * Ouvre/ferme menu hamburger
	 */
	toggleHamburger() {
		// Icône hamburger
		this.hamburger.toggleClass(this.hamburgerOpenClass);

		// Menu hamburger
		if (!this.isMenuOpen) {
			this.openingAnim.play(0);
		} else {
			if (this.openingAnim.isActive()) {
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