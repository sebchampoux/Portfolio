<template>
	<section class="a-propos" id="a-propos">
		<img src="../assets/svg/background_montagneRusse1.svg" alt="" class="bg-coaster a-propos__bg-coaster">

		<div class="container a-propos__container">
			<div class="row">
				<article class="col-lg-5 col-md-6 a-propos__text-wrapper">
					<h1 class="a-propos__title">{{ sectionTitle }}</h1>
					<div class="a-propos__text" v-html="presentation"></div>
				</article>
				<div class="col-xl-4 offset-xl-3 col-lg-5 offset-lg-2 col-md-6 a-propos__photo-wrapper">
					<img src="../../static/imgs/a-propos__ma-photo.jpg" alt="Moi" class="a-propos__ma-photo">
				</div>
			</div>
		</div>
		<svg version="1.1"
		     xmlns="http://www.w3.org/2000/svg"
		     viewBox="0 0 1920 150"
		     class="section-cache">
			<polygon class="section-cache__path" points="0,150 1920,0 1920,150"></polygon>
		</svg>
	</section>
</template>

<script>
	import {store} from "../store/store";

	export default {
		name: "a-propos",
		computed: {
			sectionTitle() {
				return store.homePage.acf.titre_section_presentation;
			},
			presentation() {
				return store.homePage.content.rendered;
			}
		},
	}
</script>