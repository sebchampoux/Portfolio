<template>
	<section class="cv-contact" id="cv-contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 cv-contact__button-wrapper">
					<a :href="cvUrl" target="_blank" class="button button--size--full"><i
							class="button__icon icon-doc-text"></i>Mon CV</a>
				</div>
				<div class="col-12 cv-contact__button-wrapper">
					<a href="mailto:contact@sebastienchampoux.com" target="_blank" class="cv-contact__email">contact@sebastienchampoux.com</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import {store} from "../store/store";

	export default {
		name: "cv-contact",
		methods: {
			toggleContactForm() {
				store.showContactForm = !store.showContactForm;
			}
		},
		computed: {
			cvUrl() {
				return store.homePage.acf.cv_telechargement;
			}
		}
	}
</script>