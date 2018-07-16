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
		}
	}
</script>

<style scoped>

</style>