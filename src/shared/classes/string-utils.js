/**
 * Fonctions utilitaires pour les chaînes de caractères
 */
export const stringUtils = {
	/**
	 * Concatène les paramètres en une chaîne de caractères
	 *
	 * @param {Object} params - Paramètres à concaténer
	 * @return {String} paramètres concaténés en une chaîne (incluant le '?' initial)
	 */
	stringifyParams(params) {
		let urlString = '?';
		let isFirstLoopIteration = true;

		for (let key in params) {
			if (!params.hasOwnProperty(key)) continue;

			// Si pas le premier paramètre, on ajoute un '&'
			if (!isFirstLoopIteration) {
				urlString += '&';
			} else {
				isFirstLoopIteration = false;
			}

			urlString += key + '=' + params[key];
		}

		return urlString;
	},

	/**
	 * Décode une chaîne contenant des caractères spéciaux encodés
	 *
	 * @param {String} stringToDecode - chaîne à décoder
	 * @return {String} chaîne décodée
	 */
	decodeSpecialChars(stringToDecode) {
		const tempInput = document.createElement('textarea');
		tempInput.innerHTML = stringToDecode;
		return tempInput.value;
	},

	/**
	 * Slugify une chaîne de caractères
	 * @param {String} string - chaîne à sluggifier
	 * @return {string}
	 */
	slugifyString(string) {
		return string.toString().toLowerCase()
			.replace(/\s+/g, '-')           // Replace spaces with -
			.replace(/[^\w\-]+/g, '')       // Remove all non-word chars
			.replace(/\-\-+/g, '-')         // Replace multiple - with single -
			.replace(/^-+/, '')             // Trim - from start of text
			.replace(/-+$/, '');            // Trim - from end of text
	}
};