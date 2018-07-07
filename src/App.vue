<template>
	<div class="page">
		<main-nav></main-nav>
		<back-to-top></back-to-top>

		<contact-form></contact-form>

		<div
				class="page__content"
				:class="{'page__content--tossed-aside': showContactForm}">


			<!-- Components de la page d'accueil, à déplacer éventuellement -->
			<hero-area></hero-area>
			<a-propos></a-propos>
			<galerie-projets></galerie-projets>
			<competences-distinctions></competences-distinctions>
			<cv-contact></cv-contact>
			<page-footer></page-footer>
		</div>
	</div>
</template>

<script>
	import {store} from "./store/store";
	import MainNav from "./shared/components/main-nav";
	import HeroArea from "./front-page/hero-area";
	import APropos from "./front-page/a-propos";
	import BackToTop from "./shared/components/back-to-top";
	import GalerieProjets from "./front-page/galerie-projets";
	import CompetencesDistinctions from "./front-page/competences-distinctions";
	import CvContact from "./front-page/cv-contact";
	import PageFooter from "./front-page/page-footer";
	import ContactForm from "./front-page/contact-form";
	import Project from './project-page/project';
	import ProjectsNav from "./project-page/projects-nav";

	export default {
		name: 'app',
		components: {
			ContactForm,
			PageFooter,
			CvContact,
			CompetencesDistinctions,
			GalerieProjets,
			BackToTop,
			APropos,
			HeroArea,
			MainNav
		},
		computed: {
			showContactForm() {
				return store.showContactForm;
			}
		}
	}
</script>

<style src="./assets/fontello/css/portfolio.css"></style>
<style src="../node_modules/animate.css/animate.css"></style>
<style lang="scss">@import "assets/scss/main";</style>