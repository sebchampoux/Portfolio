/**
 * Item dans le menu de navigation principal
 */
export class MenuItem {

	/**
	 * Constructeur
	 * @param {{slug: string, label: string, link: string}} itemConfig - Configuration de l'item du menu
	 */
	constructor (itemConfig) {
		/**
		 * Slug pour vueJS
		 * @type {string}
		 */
		this.slug = itemConfig.slug;

		/**
		 * Label utilisé pour l'item
		 * @type {string}
		 */
		this.label = itemConfig.label;

		/**
		 * Lien de l'item du menu
		 * @type {string}
		 */
		this.link = itemConfig.link;

		/**
		 * Quel type de lien c'est : un anchor ou une route
		 * @type {string}
		 */
		this.type = itemConfig.type;
	}
}