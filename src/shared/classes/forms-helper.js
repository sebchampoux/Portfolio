export const validationFunctions = {
	/**
	 * Vérifie si le champ est vide
	 * @param {String} value - valeur à valider
	 * @returns {boolean} Champ valide ou pas
	 */
	empty(value) {
		return value !== undefined && value !== null && value !== '';
	},

	/**
	 * Vérifie si adresse courriel est de format valide
	 * @param {String} value - valeur à valider
	 * @returns {boolean} Champ valide ou pas
	 */
	email(value) {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return emailRegex.test(String(value).toLowerCase());
	},

	/**
	 * Vérifie si une option est sélectionnée
	 *
	 * @todo à compléter
	 *
	 * @param {String} value - valeur à valider
	 * @return {boolean} Champ valide ou pas
	 */
	checked(value) {
		return false;
	}
};

/**
 * Types de champs qui utilisent le template d'input régulier
 * @type {Array}
 */
export const textInputs = [
	'text',
	'password',
	'email',
	'number'
];