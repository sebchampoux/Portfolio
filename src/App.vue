<template>
	<div class="page">
		<main-nav></main-nav>
		<back-to-top></back-to-top>

		<!-- Components de la page d'accueil, à déplacer éventuellement -->
		<hero-area></hero-area>
		<a-propos></a-propos>
	</div>
</template>

<script>
	import MainNav from "./shared/components/main-nav";
	import HeroArea from "./front-page/hero-area";
	import APropos from "./front-page/a-propos";
	import BackToTop from "./shared/components/back-to-top";

	export default {
		name: 'app',
		components: {BackToTop, APropos, HeroArea, MainNav}
	}
</script>

<style src="./assets/fontello/css/portfolio.css"></style>
<style src="../node_modules/animate.css/animate.css"></style>
<style lang="scss">@import "assets/scss/main";</style>