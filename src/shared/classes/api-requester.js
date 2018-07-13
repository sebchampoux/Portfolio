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
		const requestUrl = this.apiUrl + '/projets' + APIRequester.stringifyParams(params);
		return Vue.http.get(requestUrl);
	}

	/**
	 * Récupère une ou des pages selon les paramètres demandés
	 * @param {Object} params - Paramètres de la requête (voir https://developer.wordpress.org/rest-api/reference/pages/#arguments pour les arguments possibles)
	 * @return {PromiseLike<HttpResponse>}
	 */
	getPages(params) {
		const requestUrl = this.apiUrl + '/pages' + APIRequester.stringifyParams(params);
		return Vue.http.get(requestUrl);
	}

	/**
	 * Charge les informations sur un ou des médias
	 * @param {Object} params - Paramètres de la requête (voir https://developer.wordpress.org/rest-api/reference/media/#arguments pour les arguments possibles)
	 * @return {PromiseLike<HttpResponse>}
	 */
	getMedia(params) {
		const requestUrl = this.apiUrl + '/pages' + APIRequester.stringifyParams(params);
		return Vue.http.get(requestUrl);
	}

	/**
	 * Concatène les paramètres en une chaîne de caractères
	 *
	 * @todo à déplacer ?
	 *
	 * @param {Object} params - Paramètres à concaténer
	 * @return {String} paramètres concaténés en une chaîne (incluant le '?' initial)
	 */
	static stringifyParams(params) {
		let urlString = '?';
		let isFirstLoopIteration = true;

		for (let key in params) {
			if(!params.hasOwnProperty(key)) continue;

			// Si pas le premier paramètre, on ajoute un '&'
			if(!isFirstLoopIteration) {
				urlString += '&';
			} else {
				isFirstLoopIteration = false;
			}

			urlString += key + '=' + params[key];
		}

		return urlString;
	}

	/**
	 * Décode une chaîne contenant des caractères spéciaux encodés
	 *
	 * @todo à déplacer ?
	 *
	 * @param stringToDecode - chaîne à décoder
	 * @return {String} chaîne décodée
	 */
	static decodeSpecialChars(stringToDecode) {
		const tempInput = document.createElement('textarea');
		tempInput.innerHTML = stringToDecode;
		return tempInput.value;
	}
}