const $ = jQuery;

import SmoothScroll from './SmoothScroll';

export default {
	apparitionPoint: 250,
	isVisible: false,
	transitionSpeed: 0.2, // en secondes
	initialState: {
		display: 'none',
		opacity: 0
	},
	visibleState: {
		display: 'block',
		opacity: 1
	},

	/**
	 * DOMReady
	 */
	init() {
		this.scrollTop = $('.js-back-to-top');

		// Caché initialement
		TweenMax.set(
			this.scrollTop,
			this.initialState
		);

		// Events
		this.scrollTop.on('click', () => {
			SmoothScroll.smoothScrollTo(0);
		});
	},

	/**
	 * Lors du scroll de la page
	 * @param scrollY {Number} - valeur de ScrollY
	 */
	onPageScroll(scrollY) {
		let isPastApparitionPoint = scrollY >= this.apparitionPoint;
		let notPastApparitionPoint = scrollY <= this.apparitionPoint;

		if (isPastApparitionPoint && !this.isVisible) {
			// Apparition
			this.isVisible = true;
			TweenMax.to(
				this.scrollTop,
				this.transitionSpeed,
				this.visibleState
			);
		} else if (notPastApparitionPoint && this.isVisible) {
			// Disparition
			this.isVisible = false;
			TweenMax.to(
				this.scrollTop,
				this.transitionSpeed,
				this.initialState
			);
		}
	},
};
