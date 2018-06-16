<template>
	<li class="form__field">
		<label
				:for="fieldId"
				class="form__label"
				:class="{ 'form__label--over-input': labelOverInput }">
			{{ label }}
		</label>

		<input
				:type="type"
				:id="fieldId"
				:name="slug"
				class="form__input form__input--state--invalid">

		<div class="form__field-infos" v-if="fieldInfos">{{ fieldInfos }}</div>
		<div class="form__field-error-msg">{{ errorMessage }}</div>
	</li>
</template>

<script>
	import {validationFunctions} from "../classes/forms-helper";

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
				default: 'empty'
			},
			errorMessage: {
				type: String,
				required: false,
				default: 'La valeur saisie est invalide.'
			},
			// Seulement nécessaire pour les checkbox, radio, select
			choices: {
				type: [Array, Object],
				required: false
			}
		},
		data() {
			return {}
		},
		methods: {},
		computed: {
			labelOverInput() {
				return true;
			},
			fieldId() {
				return this.formName + '__' + this.slug;
			}
		}
	}
</script>