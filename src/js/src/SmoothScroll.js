import { TweenMax } from 'gsap/all';

/**
 * SmoothScroll
 */
export class SmoothScroll {
	/**
	 * @constructor
	 *
	 * @param {Number} speed - Vitesse de défilement de la page, en secondes
	 */
	constructor(speed = 1) {
		this.scrollSpeed = speed;
	}

	/**
	 * Scroll to target
	 *
	 * @param {HTMLElement} target
	 * @param {Number} offsetY
	 */
	smoothScrollTo(target, offsetY = 0) {
		TweenMax.to(
			window,
			this.scrollSpeed,
			{
				scrollTo: {
					y: target,
					offsetY: offsetY
				}
			}
		);
	}
}