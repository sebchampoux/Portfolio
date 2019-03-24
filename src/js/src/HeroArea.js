import { TweenMax, TimelineMax } from 'gsap/all';

const $ = jQuery;

import SmoothScroll from './SmoothScroll';
import Menu from './Menu';

/**
 * Pour la zone hero de la page d'accueil
 */
export class HeroArea {
	/**
	 * @constructor
	 */
	constructor() {
		if(this.getElements()) {
			this.attachEvents();
			// this.setupAnimations();
			// this.animateIn();
		}
	}

	/**
	 * Récupère et enregistre les éléments dont on a besoin.  Retourne false s'il n'y a pas de zone hero dans la page.
	 *
	 * @returns {Boolean} succès ou échec
	 */
	getElements() {
		this.heroArea = $('.js-hero-area');
		if(this.heroArea === undefined) { return false; }

		this.projectsButton = $('.js-hero-area__button');
		this.image = $('.js-hero-area__feat-img');
		this.textbox = $('.js-hero-area__text-box');

		return true;
	}

	/**
	 * Ajout des écouteurs d'évènements
	 */
	attachEvents() {
		// Bouton projets
		const navHeight = Menu.getMainNavHeight();
		const target = this.projectsButton.attr('href');

		this.projectsButton.on('click', e => {
			e.preventDefault();
			SmoothScroll.smoothScrollTo(
				target,
				navHeight
			);
		});
	}

	/**
	 * Mise en place des animations entrée/sortie
	 */
	setupAnimations() {
		this.tl = new TimelineMax({
			paused: true
		});

		this.tl.addLabel('setup');
		this.tl.add(TweenMax.set(this.image, { 'clip-path': 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }));
		this.tl.add(TweenMax.set(this.textbox, { 'clip-path': 'polygon(-5% -5%, -5% -5%, -5% 100%, -5% 100%)' }));

		this.tl.addLabel('elements-in');
		this.tl.add(TweenMax.to(this.image, 0.8, { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: Power1.easeOut }));
		this.tl.add(TweenMax.to(this.textbox, 0.8, { 'clip-path': 'polygon(-5% -5%, 100% -5%, 100% 100%, -5% 100%)', ease: Power1.easeOut }), '-=0.2');
	}

	/**
	 * Animation d'entrée
	 */
	animateIn() {
		this.tl.play();
	}
}