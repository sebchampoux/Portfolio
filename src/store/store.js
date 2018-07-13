import Vue from 'vue';
import {ReseauSocial} from "../shared/classes/reseau-social";
import APIRequester from "../shared/classes/api-requester";
import {config} from "../config/config";

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
			scroll: 0
		},

		showContactForm: false,

		apiRequester: new APIRequester(config.ajax_url),

		// Données partagées entre les pages
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
		],

		projects: []
	},
	methods: {
		/**
		 * Appelé lorsque la fenêtre est resizée
		 * Entre les nouvelles dimensions de l'écran
		 * @param {event} e
		 */
		resizeWindow(e) {
			this.browserWindow.width = e.currentTarget.innerWidth;
			this.browserWindow.height = e.currentTarget.innerHeight;
		},

		/**
		 * Lors du scroll de l'écran
		 * @param {event} e
		 */
		scrollWindow(e) {
			this.browserWindow.scroll = e.currentTarget.scrollY;
		},

		/**
		 * Smoothscroll jusqu'à une section X
		 */
		scrollWindowTo() {

		},

		/**
		 * Charge les projets à partir de l'API et les enregistre dans projects
		 */
		loadProjects() {
			this.apiRequester.getProjects({}).then(
				response => {
					this.projects = response.body;
				},
				errorResponse => {
					console.log('Erreur lors du chargement des projets');
				});
		}
	},
	created() {
		// Écouteurs d'évènement
		window.addEventListener('resize', this.resizeWindow);
		window.addEventListener('scroll', this.scrollWindow);

		// Dimensions de base de l'écran
		this.browserWindow.width = window.innerWidth;
		this.browserWindow.height = window.innerHeight;
		this.browserWindow.scroll = window.scrollY;
	},
	beforeDestroy() {
		// Écouteurs d'évènement
		window.removeEventListener('resize', this.resizeWindow);
		window.removeEventListener('scroll', this.scrollWindow);
	}
});
