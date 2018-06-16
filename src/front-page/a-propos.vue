<template>
	<section class="a-propos">
		<img src="../assets/svg/background_montagneRusse1.svg" alt="" class="bg-coaster a-propos__bg-coaster">

		<div class="container a-propos__container">
			<div class="row">
				<article class="col-lg-5 col-md-6 a-propos__text-wrapper">
					<h1 class="a-propos__title">À propos</h1>
					<p class="a-propos__text">Je suis un gradué de <strong class="text--fw--bold">Techniques d’intégration multimédia</strong>, au Cégep Édouard-Montpetit. J’adore tout ce qui touche à la création numérique, notamment le design, le graphisme et la modélisation 3D, mais j’excelle plus particulièrement en <strong class="text--fw--bold">intégration Web</strong> et en <strong class="text--fw--bold">programmation</strong>.</p>
					<p class="a-propos__text">Je me considère responsable, autodidacte, et j’ai un grand sens de l’initiative ; je vise toujours l’excellence (sans excès de perfectionnisme) dans les projets que j’entreprends.</p>
					<p class="a-propos__text text--fz--small">J’assume aussi aimer (beaucoup) les <span class="text--fw--bold">montagnes russes</span>, d’où le thème de mon portfolio. Ça n’a aucun rapport avec le domaine du multimédia, mais ça me représente bien.</p>
				</article>
				<div class="col-xl-4 offset-xl-3 col-lg-5 offset-lg-2 col-md-6 a-propos__photo-wrapper">
					<img :src="maPhoto.src" :alt="maPhoto.alt" class="a-propos__ma-photo">
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
	export default {
		name: "a-propos",
		data() {
			return {
				maPhoto: {
					src: './src/assets/imgs/a-propos__ma-photo.jpg',
					alt: 'Moi'
				}
			}
		},
	}
</script>