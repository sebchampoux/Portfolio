export const config = {
	/**
	 * URL de l'API Rest
	 */
	ajax_url: 'http://sebastienchampoux.com/wp-json/wp/v2',

	/**
	 * URL auquel il faut faire une requête pour les pages
	 */
	page_url: this.ajax_url + '/pages',

	/**
	 * URL auquel il faut faire une requête pour les projets
	 */
	projects_url: this.ajax_url + '/projets'
};