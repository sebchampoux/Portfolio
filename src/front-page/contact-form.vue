<template>
	<section class="contact-form contact-form--top-nav-pd page__contact-form">
		<button class="contact-form__close-btn"><i class="icon-cancel"></i></button>

		<div class="contact-form__container">
			<h1 class="contact-form__title">Dites-moi allô !</h1>
			<p class="contact-form__subtitle">Si ça vous tente ; pas de pression.</p>

			<form method="post" class="form" @submit="submitForm">
				<ol class="form__list">
					<form-field
							v-for="(field, key) in formInputs"
							:key="field.slug"
							:type="field.type"
							:slug="field.slug"
							:label="field.label"
							:required="field.required"
							:validation="field.validation"
							:formName="formName"
					></form-field>
				</ol>
				<div class="form__buttons-wrapper">
					<button type="submit" class="button button--size-small">Envoyer</button>
				</div>
			</form>

		</div>
	</section>
</template>

<script>
	import {validationFunctions} from "../shared/classes/forms-helper";
	import FormField from "../shared/components/form-field";

	export default {
		name: "contact-form",
		data() {
			return {
				formName: 'contactForm',
				formInputs: [
					{
						type: 'text',
						slug: 'usersName',
						label: 'Votre nom',
						required: true,
						validation: validationFunctions.empty
					},
					{
						type: 'email',
						slug: 'usersEmail',
						label: 'Votre courriel',
						required: true,
						validation: validationFunctions.email
					},
					{
						type: 'textarea',
						slug: 'message',
						label: 'Votre message',
						required: true,
						validation: validationFunctions.empty
					}
				]
			}
		},
		components: {FormField},
		methods: {
			submitForm (e) {
				e.preventDefault();
			}
		}
	}
</script>