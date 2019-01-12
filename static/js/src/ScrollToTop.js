const $ = jQuery;

export default {
	apparitionPoint: 250,
	isVisible: false,

	/**
	 * DOMReady
	 */
	init() {
		this.scrollTop = $('.js-back-to-top');
	},

	/**
	 * Lors du scroll de la page
	 * @param scrollY {Number} - valeur de ScrollY
	 */
	onPageScroll(scrollY) {

		// TODO animation CSS pour apparition et disparition

		if(scrollY >= this.apparitionPoint && !this.isVisible) {

		} else if(scrollY <= this.apparitionPoint && this.isVisible) {

		}
	},
};
