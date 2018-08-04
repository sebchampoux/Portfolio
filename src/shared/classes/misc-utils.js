/**
 * Fonctions utilitaires randoms
 * J'aime pas faire ça, à refactor éventuellement
 * @type {{isObjectEmpty(Object): boolean}}
 */
export const miscUtils = {
	/**
	 * Vérifie si un objet est vide
	 * @param {Object} objectToTest - Objet à tester
	 * @return {boolean}
	 */
	isObjectEmpty(objectToTest) {
		return Object.keys(objectToTest).length === 0;
	}
};