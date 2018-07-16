<template>
	<footer class="footer">
		<svg version="1.1"
		     xmlns="http://www.w3.org/2000/svg"
		     viewBox="0 0 1920 150"
		     class="section-cache">
			<polygon class="section-cache__path" points="0,0 1920,0 1920,150"></polygon>
		</svg>

		<div class="container footer__container">
			<div class="row">
				<div class="col-12">
					<ul class="reseaux-sociaux reseaux-sociaux--icons-centered footer__reseaux-sociaux">
						<li class="reseaux-sociaux__item" v-for="(reseauSocial, index) in socialNetworks">
							<a :href="reseauSocial.link"
							   target="_blank"
							   rel="noopener"
							   class="reseaux-sociaux__link reseaux-sociaux__link--color--inverted"
							   :class="[reseauSocial.itemClass]"
							   :title="reseauSocial.siteName">
								<i
										class="reseaux-sociaux__icon"
										:class="[reseauSocial.iconClass]">
								</i>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div class="row">
				<div class="col-12">
					<p class="footer__copyright">&copy; 2018 - Séb</p>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
	import {store} from "../store/store";

	export default {
		name: "page-footer",
		computed: {
			socialNetworks() {
				return store.socialNetworks;
			}
		},
	}
</script>