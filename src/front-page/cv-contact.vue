<template>
	<section class="cv-contact">
		<div class="container">
			<div class="row">
				<div class="col-lg-5 offset-lg-1 col-md-6">
					<a href="javascript:;" target="_blank" class="button button--size--full"><i
							class="button__icon icon-doc-text"></i>Mon CV</a>
				</div>
				<div class="col-lg-5 col-md-6">
					<button class="button button--size--full" @click.prevent="toggleContactForm"><i class="button__icon icon-mail"></i>Me contacter</button>
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
		}
	}
</script>