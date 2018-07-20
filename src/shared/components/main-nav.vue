<template>
	<nav
			class="main-nav page__main-nav"
			:class="{'main-nav--page-scrolled': showMenuShadow}">
		<div class="container-fluid main-nav__container">
			<!-- Mon nom -->
			<h1 class="site-name main-nav__site-name">
				<router-link to="/" class="site-name__link">Sébastien Champoux</router-link>
			</h1>

			<!-- Menu principal -->
			<transition
					name="custom-classes-transition"
					enter-active-class="animated slideInRight"
					leave-active-class="animated slideOutRight">
				<div class="main-nav__menu-wrapper" v-show="menuIsVisible">
					<ul class="menu main-nav__menu">
						<li
								class="menu__item"
								v-for="(item, index) in menuItems"
								:key="item.slug">
							<a v-if="item.type === 'anchor'" class="menu__link" @click.prevent="/* SmoothScroll */">{{ item.label }}</a>
							<a v-if="item.type === 'method'" class="menu__link" @click.prevent="item.link">{{ item.label }}</a>
							<router-link v-if="item.type === 'route'" :to="item.link" class="menu__link">{{ item.label }}</router-link>
						</li>
					</ul>
					<ul class="reseaux-sociaux main-nav__reseaux-sociaux">
						<li class="reseaux-sociaux__item" v-for="(reseauSocial, index) in socialNetworks">
							<a :href="reseauSocial.link"
							   target="_blank"
							   rel="noopener"
							   class="reseaux-sociaux__link reseaux-sociaux__link--size--small"
							   :class="[reseauSocial.itemClass]"
							   :title="reseauSocial.siteName">
								<i class="reseaux-sociaux__icon" :class="[reseauSocial.iconClass]"></i>
							</a>
						</li>
					</ul>
				</div>
			</transition>

			<!-- Hamburger -->
			<div
					class="hamburger main-nav__hamburger hamburger--collapse"
					:class="{'is-active': hamburgerIsOpen}"
					@click="toggleHamburger">
				<div class="hamburger-box">
					<div class="hamburger-inner"></div>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
	import {store} from "../../store/store";
	import {MenuItem} from "../classes/menu-item";

	export default {
		name: "main-nav",
		data() {
			return {
				mobileMenuBreakpoint: 992,              // Point à partir duquel on tombe au menu mobile
				showMenuShadowPoint: 150,               // Point à partir duquel on mets l'ombre sous le menu
				hamburgerIsOpen: false,

				/**
				 * @todo à déplacer ailleurs
				 */
				menuItems: [
					new MenuItem({
						slug: 'a-propos',
						label: 'À propos',
						link: '#a-propos',
						type: 'anchor'
					}),
					new MenuItem({
						slug: 'projets',
						label: 'Projets',
						link: '#galerie-projets',
						type: 'anchor'
					}),
					new MenuItem({
						slug: 'competences',
						label: 'Compétences',
						link: '#competences',
						type: 'anchor'
					}),
					new MenuItem({
						slug: 'distinctions',
						label: 'Distinctions',
						link: '#distinctions',
						type: 'anchor'
					}),
					new MenuItem({
						slug: 'cv',
						label: 'CV',
						link: '#cv-contact',
						type: 'anchor'
					}),
					new MenuItem({
						slug: 'contact',
						label: 'Contact',
						link: () => { store.showContactForm = !store.showContactForm; },
						type: 'method'
					})
				]
			};
		},
		methods: {
			/**
			 * Ouvre/ferme l'icône hamburger
			 */
			toggleHamburger() {
				this.hamburgerIsOpen = !this.hamburgerIsOpen;
			}
		},
		computed: {
			/**
			 * Détermine si la page a été scrollée ou non afin de rajouter une classe au menu
			 * @returns {boolean}
			 */
			showMenuShadow() {
				return store.browserWindow.scroll >= this.showMenuShadowPoint;
			},

			/**
			 * Détermine si le menu est visible ou non
			 * @returns {boolean}
			 */
			menuIsVisible() {
				if (store.browserWindow.width <= this.mobileMenuBreakpoint) {
					return this.hamburgerIsOpen;
				}
				return true;
			},

			/**
			 * @returns {Array} réseaux sociaux
			 */
			socialNetworks() {
				return store.socialNetworks;
			},
		}
	}
</script>