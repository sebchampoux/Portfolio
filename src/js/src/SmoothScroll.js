/**
 * SmoothScroll
 */
export default {
	smoothScrollSpeed: 1, // en secondes

	/**
	 * SmoothScroll jusqu'à un point X
	 * @param {Number|String} target - Endroit jusqu'où on veut smoothScroll
	 * @param {Number} offsetY - Offset pour éviter que le contenu soit caché sous la nav
	 */
	smoothScrollTo(target, offsetY = 0) {
		TweenLite.to(
			window,
			this.smoothScrollSpeed,
			{
				scrollTo: {
					y: target,
					offsetY: offsetY
				}
			}
		);
	},
};