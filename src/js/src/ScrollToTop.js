const $ = jQuery;

import { SmoothScroll } from './SmoothScroll';
import { TweenMax } from 'gsap/all';

/**
 * Bouton scroll back to top
 */
export class ScrollToTop {
	/**
	 * @constructor
	 */
	constructor() {
		this.props = {
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
		};

		this.root = $('.js-back-to-top');

		TweenMax.set(
			this.root,
			this.props.initialState
		);

		this.smoothScroll = new SmoothScroll();

		// Évènement clic
		this.root.on('click', () => {
			this.smoothScroll.smoothScrollTo(0);
		});
	}

	/**
	 * Lors du scroll de la page
	 * @param scrollY {Number} - valeur de ScrollY
	 */
	onPageScroll(scrollY) {
		let isPastApparitionPoint = scrollY >= this.props.apparitionPoint;
		let notPastApparitionPoint = scrollY <= this.props.apparitionPoint;

		if (isPastApparitionPoint && !this.props.isVisible) {
			// Apparition
			this.props.isVisible = true;
			TweenMax.to(
				this.root,
				this.props.transitionSpeed,
				this.props.visibleState
			);
		} else if (notPastApparitionPoint && this.props.isVisible) {
			// Disparition
			this.props.isVisible = false;
			TweenMax.to(
				this.root,
				this.props.transitionSpeed,
				this.props.initialState
			);
		}
	}
}
