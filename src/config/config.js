/**
 * Configuration du site
 */
export const config = {
	/**
	 * URL de l'API Rest
	 * @type {string}
	 */
	ajax_url: 'http://sebastienchampoux.com/wp-json/wp/v2',

	/**
	 * URL auquel il faut faire une requête pour les pages
	 * @type {string}
	 */
	page_url: this.ajax_url + '/pages',

	/**
	 * URL auquel il faut faire une requête pour les projets
	 * @type {string}
	 */
	projects_url: this.ajax_url + '/projets'
};