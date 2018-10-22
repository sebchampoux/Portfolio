<template>
	<header class="hero-area hero-area--top-nav">
		<img src="../assets/imgs/hero-area__feat-img.jpg" alt="Leviathan @ Canada's Wonderland" class="hero-area__feat-img">

		<div class="container hero-area__container">
			<div class="row hero-area__row">
				<div class="col-md-8 col-sm-10">
					<div class="text-box text-box--content-centered hero-area__text-box">
						<h1 class="text-box__title">Sébastien Champoux</h1>
						<div class="text-box__separation"></div>
						<h2 class="text-box__subtitle">Intégrateur et développeur web</h2>
						<a href="#" class="button" @click.prevent="scrollToProjects">Mes projets</a>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>


<script>
	import {store} from "../store/store";

	export default {
		name: "hero-area",
		data() {
			return {
				featuredImg: {
					alt: 'Leviathan @ Canada\'s Wonderland'
				}
			};
		},
		methods: {
			scrollToProjects() {
				store.smoothScrollTo('#galerie-projets');
			},
		},
	}
</script>