<template>
	<nav
			class="main-nav page__main-nav"
			:class="{'main-nav--page-scrolled': pageIsScrolled}">
		<div class="container-fluid main-nav__container">
			<!-- Mon nom -->
			<h1 class="site-name main-nav__site-name">
				<a href="javascript:;" class="site-name__link">Sébastien Champoux</a>
			</h1>

			<!-- Menu principal -->
			<transition
					name="custom-classes-transition"
					enter-active-class="animated slideInRight"
					leave-active-class="animated slideOutRight">
				<div class="main-nav__menu-wrapper" v-show="menuIsOpen">
					<ul class="menu main-nav__menu">
						<li class="menu__item" v-for="(item, index) in menuItems" :key="item.slug">
							<a :href="item.link" class="menu__link">{{ item.label }}</a>
						</li>
					</ul>
					<ul class="reseaux-sociaux main-nav__reseaux-sociaux">
						<li class="reseaux-sociaux__item">
							<a href="javascript:;" target="_blank" rel="noopener"
							   class="reseaux-sociaux__link reseaux-sociaux__link--linked-in"><i
									class="reseaux-sociaux__icon icon-linkedin"></i></a>
						</li>
						<li class="reseaux-sociaux__item">
							<a href="javascript:;" target="_blank" rel="noopener"
							   class="reseaux-sociaux__link reseaux-sociaux__link--behance"><i
									class="reseaux-sociaux__icon icon-behance"></i></a>
						</li>
						<li class="reseaux-sociaux__item">
							<a href="javascript:;" target="_blank" rel="noopener"
							   class="reseaux-sociaux__link reseaux-sociaux__link--youtube"><i
									class="reseaux-sociaux__icon icon-youtube-play"></i></a>
						</li>
						<li class="reseaux-sociaux__item">
							<a href="javascript:;" target="_blank" rel="noopener"
							   class="reseaux-sociaux__link reseaux-sociaux__link--pinterest"><i
									class="reseaux-sociaux__icon icon-pinterest"></i></a>
						</li>
					</ul>
				</div>
			</transition>

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
				menuIsOpen: false,
				pageIsScrolled: true,

				/**
				 * @todo Dummy data ; menu items must be replaced by a TypeScript class
				 */
				menuItems: [
					{
						slug: 'a-propos',
						label: 'À propos',
						link: 'javascript:;'
					},
					{
						slug: 'projets',
						label: 'Projets',
						link: 'javascript:;'
					},
					{
						slug: 'competences',
						label: 'Compétences',
						link: 'javascript:;'
					},
					{
						slug: 'distinctions',
						label: 'Distinctions',
						link: 'javascript:;'
					},
					{
						slug: 'cv',
						label: 'CV',
						link: 'javascript:;'
					},
					{
						slug: 'contact',
						label: 'Contact',
						link: 'javascript:;'
					}
				]
			};
		}
	}
</script>