export const validationFunctions = {
	/**
	 * Vérifie si le champ est vide
	 * @param {String} value - valeur à valider
	 * @returns {boolean} Champ valide ou pas
	 */
	empty(value) {
		return false;
	},

	/**
	 * Vérifie si adresse courriel est de format valide
	 * @param {String} value - valeur à valider
	 * @returns {boolean}
	 */
	email(value) {
		return false;
	}
};

/**
 * Types de champs acceptés
 * @type {Array}
 */
export const inputTypes = [
	'text',
	'textarea',
	'email',
	'password'
];