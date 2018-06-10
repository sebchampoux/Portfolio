<template>
	<div class="page">
		<main-nav></main-nav>
	</div>
</template>

<script>
	import MainNav from "./shared/components/main-nav";

	export default {
		name: 'app',
		components: {MainNav}
	}
</script>

<style src="./assets/fontello/css/portfolio.css"></style>
<style src="../node_modules/animate.css/animate.css"></style>
<style lang="scss">@import "assets/scss/main";</style>