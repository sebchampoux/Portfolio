<template>
	<section class="contact-form contact-form--top-nav-pd page__contact-form">
		<button class="contact-form__close-btn" @click="closeForm"><i class="icon-cancel"></i></button>

		<div class="contact-form__container">
			<h1 class="contact-form__title">Dites-moi allô !</h1>
			<p class="contact-form__subtitle">Si ça vous tente ; pas de pression.</p>

			<form method="post" class="form" @submit.prevent="submitForm">
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
							:choices="field.choices"
							v-model="field.value"></form-field>
				</ol>
				<div class="form__buttons-wrapper">
					<button type="submit" class="button button--size-small" @click.prevent="submitForm">Envoyer</button>
				</div>
			</form>

		</div>
	</section>
</template>

<script>
	import {validationFunctions} from "../shared/classes/forms-helper";
	import {store} from "../store/store";
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
						validation: validationFunctions.empty,
						value: ''
					},
					{
						type: 'email',
						slug: 'usersEmail',
						label: 'Votre courriel',
						required: true,
						validation: validationFunctions.email,
						value: ''
					},
					{
						type: 'textarea',
						slug: 'message',
						label: 'Votre message',
						required: true,
						validation: validationFunctions.empty,
						value: ''
					},
					{
						type: 'radio',
						slug: 'test',
						label: 'Test de bouton radio',
						validation: validationFunctions.empty,
						value: '',
						choices: {
							item1: 'Item 1',
							item2: 'Item 2',
							item3: 'Item 3'
						}
					}
				]
			}
		},
		components: {FormField},
		methods: {
			submitForm() {

			},
			closeForm() {
				store.showContactForm = false;
			}
		}
	}
</script>