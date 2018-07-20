import Vue from 'vue';
import {TweenLite, ScrollToPlugin} from 'gsap/all';
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
			scroll: 0,
			scrollSpeed: 1.25  // en secs
		},

		// API Rest
		apiRequester: new APIRequester(config.ajax_url),
		projects: [],
		homePage: {},

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
		 * @param {event} e
		 */
		resizeWindow(e) {
			this.browserWindow.width = e.currentTarget.innerWidth;
			this.browserWindow.height = e.currentTarget.innerHeight;
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
		 * @param {string|number} section - ID de la section à laquelle on veut smoothscroller OU position Y dans la page
		 */
		smoothScrollTo(section) {
			TweenLite.to(
				window,
				this.browserWindow.scrollSpeed,
				{
					scrollTo: section,
					onComplete: () => this.scrollWindow() // Pour updater la position dans la page enregistrée dans l'instance Vue
				}
			);
		},

		/**
		 * Charge les projets à partir de l'API et les enregistre dans projects
		 * @param {function} successCallback
		 */
		loadProjects(successCallback) {
			// Chargement des projets
			this.apiRequester.getProjects({}).then(
				response => {
					this.projects = response.body;
					this.loadProjectMedias();
					if (successCallback) {
						successCallback();
					}
				},
				errorResponse => {
					console.log('Erreur lors du chargement des projets');
				});
		},

		/**
		 * Charge les informations des médias de tous les projets
		 * @param {function} successCallback
		 */
		loadProjectMedias(successCallback) {
			this.projects.forEach(project => {
				this.apiRequester.getMediaById(project.featured_media).then(
					response => {
						project.featuredMediaDetails = response.body;
						if (successCallback) {
							successCallback();
						}
					},
					errorResponse => {
						console.log('Erreur lors du chargement du media ayant comme ID : ' + mediaId);
					}
				);
			});
		},

		/**
		 * Charge la page d'accueil
		 * @param {function} successCallback
		 */
		loadHomePage(successCallback) {
			this.apiRequester.getPageById(30).then(
				response => {
					this.homePage = response.body;
					if (successCallback) {
						successCallback();
					}
				},
				errorResponse => {
					console.log('Erreur lors du chargement de la page d\'accueil');
				}
			);
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

		// Exécute toutes les requêtes à l'API pour charger le contenu de la page d'accueil
		// @TODO à retirer d'ici, temporaire
		this.isLoading = true;
		this.loadProjects(() => {
			this.loadHomePage(() => {
				this.isLoading = false;
			});
		});
	},
	beforeDestroy() {
		// Écouteurs d'évènement
		window.removeEventListener('resize', this.resizeWindow);
		window.removeEventListener('scroll', this.scrollWindow);
	}
});
