<template>
	<nav class="projects-nav page__projects-nav">
		<ul class="projects-nav__list">
			<li class="projects-nav__item">
				<a href="javascript:;" class="projects-nav__link">
					<i class="projects-nav__icon icon-left-open-mini"></i>
					<span class="projects-nav__label">Précédent</span>
				</a>
			</li>
			<li class="projects-nav__item">
				<a href="javascript:;" class="projects-nav__link">
					<i class="projects-nav__icon icon-home"></i>
					<span class="projects-nav__label">Accueil</span>
				</a>
			</li>
			<li class="projects-nav__item">
				<a href="javascript:;" class="projects-nav__link">
					<span class="projects-nav__label">Suivant</span>
					<i class="projects-nav__icon icon-right-open-mini"></i>
				</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "projects-nav"
	}
</script>