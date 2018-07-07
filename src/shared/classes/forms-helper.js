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
	 * @returns {boolean} Champ valide ou pas
	 */
	email(value) {
		return false;
	},

	/**
	 * Vérifie si une option est sélectionnée
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
	'email'
];