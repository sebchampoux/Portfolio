/**
 * Réseau social
 */
export class ReseauSocial {

	/**
	 * Constructeur
	 * @param {{slug: string, siteName: string, link: string, iconClass: string}} siteParams
	 */
	constructor (siteParams) {

		/**
		 * Slug pour VueJS
		 * @type {string}
		 */
		this.slug = siteParams.slug;

		/**
		 * Nom du réseau social
		 * @type {string}
		 */
		this.siteName = siteParams.siteName;

		/**
		 * Lien
		 * @type {string}
		 */
		this.link = siteParams.link;

		/**
		 * Classe de l'icône à utiliser
		 * @type {string}
		 */
		this.iconClass = siteParams.iconClass;

		/**
		 * Classe modifier pour le reseaux-sociaux__icon (pour le hover)
		 * @type {string}
		 */
		this.itemClass = siteParams.itemClass;
	}
}