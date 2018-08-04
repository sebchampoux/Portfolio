import Vue from 'vue';
import {ReseauSocial} from "../shared/classes/reseau-social";
import APIRequester from "../shared/classes/api-requester";
import {config} from "../config/config";
import {miscUtils} from "../shared/classes/misc-utils";

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

		// API AJAX
		apiRequester: new APIRequester(config.ajax_url),

		// Données des pages et du site en général (partagé entre les pages)
		projects: [],
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

		},

		/**
		 * Charge et enregistre les projets
		 */
		loadProjects() {
			// Si les projets sont déjà chargés, pas besoin de les recharger
			if (this.projects.length !== 0) return;

			this.apiRequester.getProjects().then(
				successData => {
					// Enregistrement des projets
					this.projects = successData.body;

					// Chargement des médias
					const mediaIds = [];
					this.projects.forEach(project => mediaIds.push(project.featured_media));
					this.apiRequester.getMedias({include: mediaIds}).then(
						success => {
							// Enregistrement des médias dans le projet correspondant
							const mediaList = success.body;
							this.projects.forEach(project => {
								project.featuredMediaDetails = mediaList.find(media => media.id === project.featured_media);
							});

							this.endLoading();
						},
						error => console.log(error)
					);
				},
				errorData => console.log(errorData)
			);
		},

		/**
		 * Charge les contenus de la page d'accueil
		 * @todo à refactor pour utiliser ID de la page d'accueil renvoyé par WordPress
		 */
		loadHomePageContents() {
			// Vérifier si le contenu a déjà été chargé, pour s'éviter de le recharger inutilement
			if (!miscUtils.isObjectEmpty(store.homePage)) return;

			// Load la page d'accueil
			this.apiRequester.getPageById(30).then(
				successData => {
					store.homePage = successData.body;
					this.endLoading();
				},
				errorData => console.log(errorData)
			);
		},

		/**
		 * Mets fin au chargement si tout a été chargé
		 */
		endLoading() {
			if(this.projects.length > 0 && !miscUtils.isObjectEmpty(this.homePage)) {
				this.isLoading = false;
			}
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
