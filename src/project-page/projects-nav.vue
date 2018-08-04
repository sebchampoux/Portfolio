<template>
	<nav class="projects-nav page__projects-nav">
		<ul class="projects-nav__list">
			<li class="projects-nav__item">
				<router-link :to="'/projet/' + previous.slug" class="projects-nav__link">
					<i class="projects-nav__icon icon-left-open-mini"></i>
					<span class="projects-nav__label">Précédent</span>
				</router-link>
			</li>
			<li class="projects-nav__item">
				<router-link to="/" class="projects-nav__link">
					<i class="projects-nav__icon icon-home"></i>
					<span class="projects-nav__label">Accueil</span>
				</router-link>
			</li>
			<li class="projects-nav__item">
				<router-link :to="'/projet/' + next.slug" class="projects-nav__link">
					<span class="projects-nav__label">Suivant</span>
					<i class="projects-nav__icon icon-right-open-mini"></i>
				</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: "projects-nav",
		props: {
			previous: {
				type: Object,
				required: true
			},
			next: {
				type: Object,
				required: true
			}
		},
	}
</script>