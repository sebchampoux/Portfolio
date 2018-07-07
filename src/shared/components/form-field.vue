<!-- TODO à améliorer éventuellement (champs radio, select, checkbox...) -->

<template>
	<li class="form__field">
		<!-- Input régulier (texte, password, email, etc.) -->
		<template v-if="fieldTemplate === 'text'">
			<div class="form__input-wrapper form__input-wrapper--type--text">
				<label
						:for="fieldId"
						class="form__label"
						:class="{ 'form__label--over-input': labelOverInput }">
					{{ label }}
				</label>
				<input
						class="form__input form__input--type--text"
						:class="{'form__input--state--invalid': !fieldValueIsValid}"
						:type="type"
						:name="slug"
						:id="fieldId"
						v-model="value"
						@focus="fieldFocus"
						@blur="fieldBlur">
			</div>
		</template>

		<!-- Input textarea -->
		<template v-if="fieldTemplate === 'textarea'">
			<div class="form__input-wrapper form__input-wrapper--type--text">
				<label
						:for="fieldId"
						class="form__label"
						:class="{ 'form__label--over-input': labelOverInput }">
					{{ label }}
				</label>
				<textarea
						class="form__input form__input--type--textarea"
						:class="{'form__input--state--invalid': !fieldValueIsValid}"
						:name="slug"
						:id="fieldId"
						v-model="value"
						@focus="fieldFocus"
						@blur="fieldBlur"></textarea>
			</div>
		</template>

		<!-- Bouton radio -->
		<!-- TODO Problème d'utiliser value bindé à cause de v-model, trouver une solution -->
		<template v-if="fieldTemplate === 'radio'">
			<p class="form__text">{{ label }}</p>
			<div
					class="form__input-wrapper form__input-wrapper--type--radio"
					v-for="(item, key) in choices"
					:key="key">
				<input
						type="radio"
						class="form__input form__input--type--radio"
						:value="key"
						:name="slug"
						:id="slug + '__' + key"
						v-model="value">
				<label :for="slug + '__' + key">{{ item }}</label>
			</div>
		</template>

		<div class="form__field-infos" v-if="fieldInfos">{{ fieldInfos }}</div>
		<div class="form__field-error-msg" v-if="!fieldValueIsValid">{{ errorMessage }}</div>
	</li>
</template>

<script>
	import {validationFunctions, textInputs} from "../classes/forms-helper";

	export default {
		name: "form-field",
		props: {
			type: {
				type: String,
				required: true
			},
			slug: {
				type: String,
				required: true
			},
			label: {
				type: String,
				required: true
			},
			formName: {
				type: String,
				required: true
			},
			required: {
				type: Boolean,
				required: false,
				default: false
			},
			fieldInfos: {
				type: String,
				required: false
			},
			validation: {
				type: Function, // Soit utiliser une fonction de validationFunctions ou une custom, selon ce qui est nécessaire
				required: false,
				default: validationFunctions.empty
			},
			errorMessage: {
				type: String,
				required: false,
				default: 'La valeur saisie est invalide.'
			},

			// Seulement nécessaire pour les checkbox, radio, select
			// Nom de la propriété = slug, valeur = label
			choices: {
				type: [Object],
				required: false
			},

			// Pour v-model
			value: [String]
		},
		data() {
			return {
				hasFocus: false,
				fieldValueIsValid: true
			}
		},
		methods: {
			/**
			 * Renvoie la valeur du champ pour qu'on puisse utiliser v-model sur l'élément <form-field>
			 */
			sendValue() {
				this.$emit('input', this.value);
			},

			fieldFocus() {
				this.hasFocus = true;
			},

			fieldBlur() {
				this.hasFocus = false;
				this.validateField();
			},

			/**
			 * Vérifie si la valeur saisie dans le champ est valide
			 */
			validateField() {
				// Vérifie si la valeur est valide
				// Vérifie si le champ est requis, s'il ne l'est pas et que le champ est vide on autorise la validation
			}
		},
		computed: {
			/**
			 * Est-ce qu'on tasse le label au-dessus du input ou pas
			 * @return {boolean}
			 */
			labelOverInput() {
				return this.hasFocus || this.value !== '';
			},
			fieldId() {
				return this.formName + '__' + this.slug;
			},

			/**
			 * Quel type de champ on veut (input régulier, textarea, radio/checkbox...)
			 * @return {String}
			 */
			fieldTemplate() {
				if (this.type === 'textarea' || this.type === 'radio' || this.type === 'checkbox') {
					return this.type;
				} else if (textInputs.find(elem => this.type === elem)) {
					return 'text';
				}

				// Par défaut
				return 'text';
			}
		},
		watch: {
			value () {
				this.sendValue();
				console.log('Valeur envoyée');
			}
		}
	}
</script>