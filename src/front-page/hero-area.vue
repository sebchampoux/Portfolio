<template>
	<header class="hero-area page__hero-area">
		<img :src="featuredImg.src" :alt="featuredImg.alt" class="hero-area__feat-img">

		<div class="container hero-area__container">

		</div>
	</header>
</template>


<script>
	export default {
		name: "hero-area",
		data () {
			return {
				featuredImg: {
					src: '../assets/imgs/hero-area__feat-img.jpg',
					alt: 'Leviathan @ Canada\'s Wonderland'
				}
			};
		}
	}
</script>

<style scoped>

</style>