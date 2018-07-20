import Vue from 'vue';
import {ReseauSocial} from "../shared/classes/reseau-social";

/**
 * Store pour les trucs communs (propriétés ou méthodes) à plusieurs components
 * @type {Vue}
 */
export const store = new Vue({
	data: {
		// Variables pour le fonctionnement du site (ex. transition entre sections)
		browserWindow: {
			width: 0,
			height: 0,
			scroll: 0,
			scrollSpeed: 200    // en ms
		},

		// Données des pages et du site en général (partagé entre les pages)
		projects: [],
		medias: [],
		homePage: {},
		siteSettings: {},

		// Données et état partagés entre les pages
		showContactForm: false,
		isLoading: false,
		socialNetworks: [
			new ReseauSocial({
				slug: 'linked-in',
				siteName: 'Linked In',
				link: 'javascript:;',
				iconClass: 'icon-linkedin',
				itemClass: 'reseaux-sociaux__link--linked-in'
			}),
			new ReseauSocial({
				slug: 'behance',
				siteName: 'Behance',
				link: 'javascript:;',
				iconClass: 'icon-behance',
				itemClass: 'reseaux-sociaux__link--behance'
			}),
			new ReseauSocial({
				slug: 'youtube',
				siteName: 'Youtube',
				link: 'javascript:;',
				iconClass: 'icon-youtube-play',
				itemClass: 'reseaux-sociaux__link--youtube'
			}),
			new ReseauSocial({
				slug: 'pinterest',
				siteName: 'Pinterest',
				link: 'javascript:;',
				iconClass: 'icon-pinterest',
				itemClass: 'reseaux-sociaux__link--pinterest'
			})
		]
	},
	methods: {
		/**
		 * Appelé lorsque la fenêtre est resizée
		 * Enregistre les nouvelles dimensions de l'écran
		 */
		resizeWindow() {
			this.browserWindow.width = window.innerWidth;
			this.browserWindow.height = window.innerHeight;
		},

		/**
		 * Lors du scroll de l'écran
		 * Enregistre la position du scroll
		 */
		scrollWindow() {
			this.browserWindow.scroll = window.scrollY;
		},

		/**
		 * Smoothscroll
		 */
		scrollWindowTo(section) {

		}
	},
	created() {
		// Écouteurs d'évènement
		window.addEventListener('resize', this.resizeWindow);
		window.addEventListener('scroll', this.scrollWindow);

		// Dimensions de base de l'écran
		this.resizeWindow();
		this.scrollWindow();
	},
	beforeDestroy() {
		// Écouteurs d'évènement
		window.removeEventListener('resize', this.resizeWindow);
		window.removeEventListener('scroll', this.scrollWindow);
	}
});
