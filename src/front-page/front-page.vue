<template>
	<div class="page">

		<main-nav></main-nav>
		<back-to-top></back-to-top>

		<div
				class="page__content"
				:class="{'page__content--tossed-aside': showContactForm}">
			<hero-area></hero-area>
			<a-propos></a-propos>
			<galerie-projets></galerie-projets>
			<competences-distinctions></competences-distinctions>
			<cv-contact></cv-contact>
			<page-footer></page-footer>
		</div>

		<contact-form></contact-form>
	</div>
</template>

<script>
	import {miscUtils} from "../shared/classes/misc-utils";
	import {config} from "../config/config";
	import APIRequester from '../shared/classes/api-requester';
	import {store} from "../store/store";

	import MainNav from "../shared/components/main-nav";
	import BackToTop from "../shared/components/back-to-top";
	import HeroArea from "./hero-area";
	import APropos from "./a-propos";
	import GalerieProjets from "./galerie-projets";
	import CompetencesDistinctions from "./competences-distinctions";
	import CvContact from "./cv-contact";
	import PageFooter from "./page-footer";
	import ContactForm from "./contact-form";

	export default {
		name: "front-page",
		components: {
			ContactForm,
			PageFooter,
			CvContact,
			CompetencesDistinctions,
			GalerieProjets,
			APropos,
			HeroArea,
			BackToTop,
			MainNav
		},
		data() {
			return {
				apiRequester: new APIRequester(config.ajax_url)
			}
		},
		methods: {
			/**
			 * @todo à refactor pour utiliser ID de la page d'accueil renvoyé par WordPress
			 */
			loadPageContents() {
				// Vérifier si le contenu a déjà été chargé, pour s'éviter de le recharger inutilement
				if (miscUtils.isObjectEmpty(store.homePage)) {
					// Load la page d'accueil
					this.apiRequester.getPageById(30).then(
						successData => {
							store.homePage = successData.body;
						},
						errorData => console.log(errorData)
					);
				}
			},

			/**
			 * Charge les informations de tous les projets
			 */
			loadProjects() {
				// Temporaire
				if(store.projects.length !== 0) return;

				this.apiRequester.getProjects({}).then(
					successData => {
						// Enregistrer les projets dans le store
						store.projects = successData.body;

						// Liste des medias qu'on va devoir récupérer
						const projectMediasIds = [];
						store.projects.forEach(project => projectMediasIds.push(project.featured_media));

						// Requête des medias et enregistrement des infos dans les projets
						this.apiRequester.getMedias({
							include: projectMediasIds
						}).then(
							successData => {
								// On passe les projets un par un, on trouve le media correspondant et on sauvegarde les infos dans le projet
								store.projects.forEach(project => {
									project.featuredMediaDetails = successData.body.find(media => media.id === project.featured_media);
								});
							},
							errorData => console.log(errorData)
						);
					},
					errorData => console.log(errorData)
				);
			}
		},
		computed: {
			showContactForm() {
				return store.showContactForm;
			},
			/**
			 * @todo temporaire!
			 */
			homePage() {
				return store.homePage;
			}
		},
		created() {
			this.loadPageContents();
			this.loadProjects();
		}
	}
</script>