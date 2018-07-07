<template>
	<section class="project">
		<div class="container-fluid project__container">
			<div class="row project__row">
				<div class="col-lg-5 col-md-6">
					<img src="../assets/imgs/project__img.png" alt="" class="project__img">
				</div>
				<div class="col-lg-5 col-md-6">
					<h1 class="project__title">Nom du projet</h1>
					<p class="project__contexte-realisation">Projet de fin d'études, réalisé avec une folle équipe</p>
					<div class="project__description">
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium ad aut consequatur cumque debitis delectus dolor enim, eos facere id iusto laborum molestiae molestias natus, odit quo unde voluptate!</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, accusantium ad aut consequatur cumque debitis delectus dolor enim, eos facere id iusto laborum molestiae molestias natus, odit quo unde voluptate!</p>
					</div>
					<h2 class="project__subtitle">Outils utilisés</h2>
					<ul class="project__tools">
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>
					<div class="project__button-wrapper">
						<a href="javascript:;" class="button">Voir le projet<i class="icon-right-open-mini"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "project"
	}
</script>