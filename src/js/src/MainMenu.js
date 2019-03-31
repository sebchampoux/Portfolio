const $ = jQuery;

import {TweenMax, TimelineMax, Power2} from 'gsap/all';
import {SmoothScroll} from './SmoothScroll';

/**
 * Pour le menu de navigation principal
 */
export class MainMenu {
	/**
	 * @constructor
	 */
	constructor() {
		this.props = {
			hamburgerOpenClass: 'is-active',
			mobileBP: 992,
			isMenuOpen: false,
			shadow: {
				apparitionPoint: 100,
				isVisible: false,
				shadowClass: 'main-nav--page-scrolled'
			},
		};

		this.smoothScroll = new SmoothScroll();

		this.getDOMElements();
		this.attachEvents();
		this.createMenuAnimations();

		this.mainNavHeight = this.mainNav.height();

		// Page scrollée à l'ouverture ?
		if (window.scrollY >= this.props.shadow.apparitionPoint) {
			this.toggleMenuShadow(true);
		}
	}

	/**
	 * Récupère les éléments HTML
	 */
	getDOMElements() {
		this.mainNav = $('.js-main-nav');
		this.menuWrapper = $('.js-main-nav__menu-wrapper');
		this.hamburger = $('.js-hamburger');
		this.menuItems = $('.js-menu__item');
		this.links = $('.js-main-nav__link');
		this.socialNetworks = $('.js-main-nav__reseaux-sociaux');
	}

	/**
	 * Ajoute les écouteurs d'évènements
	 */
	attachEvents() {
		this.hamburger.on('click', this.toggleHamburger.bind(this));

		// SmoothScroll pour les ancres
		this.links.each((i, e) => {
			const currentLink = $(e);
			const currentLinkDest = currentLink.attr('href');
			if (currentLinkDest[0] === '#') {
				currentLink.on('click', e => {
					e.preventDefault();
					this.smoothScroll.smoothScrollTo(
						currentLinkDest,
						this.mainNavHeight
					);

					// Si mobile, on ferme le menu après un clic
					if (window.innerWidth <= this.props.mobileBP) {
						this.toggleHamburger();
					}
				});
			}
		});
	}

	/**
	 * Création des animations ouverture/fermeture (on veut juste les créer une fois)
	 */
	createMenuAnimations() {
		// Ouverture
		this.openingAnim = new TimelineMax({ paused: true });
		this.openingAnim.add(TweenMax.to(this.menuWrapper, 0.7, {right: '0'}));
		this.openingAnim.add(TweenMax.staggerFrom(this.menuItems, 0.15, { x: 400, ease: Power2.easeOut }, 0.075), '-=0.5');
		this.openingAnim.add(TweenMax.from(this.socialNetworks, 0.2, { x: 450, ease: Power2.easeOut }), '-=0.1');

		// Fermeture
		this.closeAnim = new TimelineMax({ paused: true });
		this.closeAnim.add(TweenMax.to(this.menuWrapper, 0.7, {right: '-100%'}));
	}

	/**
	 * Scroll de page
	 *
	 * @param {Number} scrollY - valeur de scrollY
	 */
	onPageScroll(scrollY) {
		if (scrollY >= this.props.shadow.apparitionPoint && !this.props.shadow.isVisible) {
			this.toggleMenuShadow(true);
		} else if (scrollY <= this.props.shadow.apparitionPoint && this.props.shadow.isVisible) {
			this.toggleMenuShadow(false);
		}
	}

	/**
	 * Lors du resize de la page
	 *
	 * @param {Number} innerWidth - Largeur interne de la fenêtre
	 */
	onPageResize(innerWidth) {
		if (innerWidth >= this.props.mobileBP) {
			this.resetDesktopStyles();
		}
	}

	/**
	 * Cache ou ajoute l'ombre du menu
	 * @param {Boolean} show  - Rendre visible ou cacher l'ombre
	 */
	toggleMenuShadow(show = false) {
		if (show) {
			this.props.shadow.isVisible = true;
			this.mainNav.addClass(this.props.shadow.shadowClass);
		} else {
			this.props.shadow.isVisible = false;
			this.mainNav.removeClass(this.props.shadow.shadowClass);
		}
	}

	/**
	 * Remet les styles du menu à zéro lors du retour au desktop
	 */
	resetDesktopStyles() {
		this.links.each((i, e) => $(e).attr({'style': ''}));
	}

	/**
	 * Ouvre/ferme menu hamburger
	 */
	toggleHamburger() {
		// Icône hamburger
		this.hamburger.toggleClass(this.props.hamburgerOpenClass);

		// Menu hamburger
		if (!this.props.isMenuOpen) {
			this.openingAnim.play(0);
		} else {
			this.closeAnim.play(0);
		}

		this.props.isMenuOpen = !this.props.isMenuOpen;
	}

	/**
	 * Retourne la hauteur de la navigation principale
	 * @returns {Number} Hauteur de la navigation principale
	 */
	getMainMenuHeight() {
		return this.mainNav.height();
	}
}