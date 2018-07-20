import Vue from 'vue';
import VueResource from 'vue-resource';
Vue.use(VueResource);

/**
 * Fait les requêtes à l'API de WordPress
 */
export default class APIRequester {

	/**
	 * Constructeur
	 * @param {String} apiUrl - URL de l'API JS de WordPress
	 */
	constructor(apiUrl) {
		/**
		 * Url de l'API Rest
		 * @type {String}
		 */
		this.apiUrl = apiUrl;
	}

	/**
	 * Récupère un ou des projets selon les paramètres demandés
	 * @param {Object} params - Paramètres de la requête (voir https://developer.wordpress.org/rest-api/reference/posts/#arguments pour les arguments possibles)
	 * @return {PromiseLike<HttpResponse>}
	 */
	getProjects(params) {
		const requestUrl = this.apiUrl + '/projets';
		return Vue.http.get(requestUrl, {params});
	}

	/**
	 * Récupère une ou des pages selon les paramètres demandés
	 * @param {Object} params - Paramètres de la requête (voir https://developer.wordpress.org/rest-api/reference/pages/#arguments pour les arguments possibles)
	 * @return {PromiseLike<HttpResponse>}
	 */
	getPages(params) {
		const requestUrl = this.apiUrl + '/pages';
		return Vue.http.get(requestUrl, {params});
	}

	/**
	 * Récupère une page selon son ID
	 * @param {number} pageId - ID de la page
	 * @return {PromiseLike<HttpResponse>}
	 */
	getPageById(pageId) {
		const requestUrl = this.apiUrl + '/pages/' + pageId;
		return Vue.http.get(requestUrl);
	}

	/**
	 * Charge les informations sur un ou des médias
	 * @param {Object} params - Paramètres de la requête (voir https://developer.wordpress.org/rest-api/reference/media/#arguments pour les arguments possibles)
	 * @return {PromiseLike<HttpResponse>}
	 */
	getMedias(params) {
		const requestUrl = this.apiUrl + '/media';
		return Vue.http.get(requestUrl, {params});
	}

	/**
	 * Charge les informations sur un ou des médias
	 * @param {number} id - ID du média à charger
	 * @return {PromiseLike<HttpResponse>|boolean}
	 */
	getMediaById(id) {
		const requestUrl = this.apiUrl + '/media/' + id;
		return Vue.http.get(requestUrl);
	}

	/**
	 * Récupère les paramètres globaux du site
	 */
	getSiteSettings() {
		const requestUrl = this.apiUrl + '/settings';
		return Vue.http.get(requestUrl);
	}
}