<template>
	<section class="galerie-projets">
		<div class="container">
			<div class="row galerie-projets__row">
				<div class="col-12">
					<h1 class="galerie-projets__title">Mes projets</h1>
				</div>
			</div>
			<div v-for="(project, index) in projects" class="row galerie-projets__row">
				<div
						class="col-xl-8 col-lg-10"
						:class="{'offset-xl-4': !indexIsEven(index), 'offset-lg-2': !indexIsEven(index)}">
					<article
							class="fiche-projet"
							:class="{'fiche-projet--layout--inverted': !indexIsEven(index)}">
						<img src="../assets/imgs/fiche-projet__img.jpg" alt="" class="fiche-projet__img">
						<div class="text-box text-box--padd-sm text-box--bg--darker fiche-projet__text-box">
							<h2 class="text-box__title text-box__title--boxed-top">{{ project.title.rendered }}</h2>
							<div class="text-box__text" v-html="project.excerpt.rendered"></div>
							<div class="text-box__text--align--rt">
								<router-link to="/projet" class="button button--link">
									Plus d'infos<i class="icon-right-open-mini button__icon button__icon--after-text"></i>
								</router-link>
							</div>
						</div>
					</article>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import {store} from "../store/store";

	export default {
		name: "galerie-projets",
		computed: {
			projects() {
				return store.projects;
			}
		},
		methods: {
			/**
			 * Vérifie si un nombre est pair
			 * @param {number} index - Nombre à tester
			 * @return {boolean} pair ou pas
			 */
			indexIsEven(index) {
				return index % 2 === 0;
			}
		},
		/**
		 * @todo temporaire!!!
		 */
		mounted() {
			store.loadProjects();
		}
	}
</script>

<style scoped>

</style>