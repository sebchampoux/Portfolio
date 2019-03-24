import barba from '@barba/core';

/**
 * Transitions entre les pages
 */
export class PageTransitions {
	/**
	 * @constructor
	 */
	constructor() {
		this.setupTransitions();
	}

	/**
	 * Mise en place des transitions entre les pages du site
	 */
	setupTransitions() {
		barba.init({
			transitions: [
				{
					name: 'home',
					namespace: 'front-page'
				},
				{
					name: 'single-project',
					namespace: 'single-projet'
				}
			]
		});
	}
}