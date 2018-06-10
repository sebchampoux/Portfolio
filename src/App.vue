<template>
	<div class="page">
		<main-nav></main-nav>

		<!-- Components de la page d'accueil, à déplacer éventuellement -->
		<hero-area></hero-area>
	</div>
</template>

<script>
	import MainNav from "./shared/components/main-nav";
	import HeroArea from "./front-page/hero-area";

	export default {
		name: 'app',
		components: {HeroArea, MainNav}
	}
</script>

<style src="./assets/fontello/css/portfolio.css"></style>
<style src="../node_modules/animate.css/animate.css"></style>
<style lang="scss">@import "assets/scss/main";</style>