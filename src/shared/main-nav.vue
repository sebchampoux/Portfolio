<template>
	<nav class="main-nav page__main-nav main-nav--page-scrolled">
		<div class="container-fluid main-nav__container">
			<!-- Mon nom -->
			<h1 class="site-name main-nav__site-name">
				<a href="javascript:;" class="site-name__link">Sébastien Champoux</a>
			</h1>

			<!-- Menu principal -->
			<ul class="menu main-nav__menu">
				<li class="menu__item"><a href="javascript:;" class="menu__link">À propos</a></li>
				<li class="menu__item"><a href="javascript:;" class="menu__link">Projets</a></li>
				<li class="menu__item"><a href="javascript:;" class="menu__link">Compétences</a></li>
				<li class="menu__item"><a href="javascript:;" class="menu__link">Distinctions</a></li>
				<li class="menu__item"><a href="javascript:;" class="menu__link">CV</a></li>
				<li class="menu__item"><a href="javascript:;" class="menu__link">Contact</a></li>
			</ul>

			<!-- Hamburger -->
			<div
					class="hamburger main-nav__hamburger hamburger--collapse"
					:class="{'is-active': menuIsOpen}"
					@click="menuIsOpen = !menuIsOpen">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	export default {
		name: "main-nav",
		data() {
			return {
				menuIsOpen: false
			};
		}
	}
</script>