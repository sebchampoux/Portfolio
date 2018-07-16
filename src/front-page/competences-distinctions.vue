<template>
	<section class="competences-distinctions">
		<img src="../assets/svg/background_montagneRusse2.svg" alt=""
		     class="bg-coaster competences-distinctions__bg-coaster">

		<svg version="1.1"
		     xmlns="http://www.w3.org/2000/svg"
		     viewBox="0 0 1920 150"
		     class="section-cache">
			<polygon class="section-cache__path" points="0,0 1920,0 1920,150"></polygon>
		</svg>

		<div class="container competences-distinctions__container">
			<div class="row">
				<div class="col-md-6">
					<div class="competences-distinctions__title-wrapper">
						<img src="../assets/svg/ordi.svg" alt="Ordi" class="competences-distinctions__title-icon">
						<h2 class="competences-distinctions__title">Compétences</h2>
					</div>
					<ul class="competences competences-distinctions__competences">
						<li
								v-for="competence in competences"
								class="competences__item">
							<img
									:src="competence.icone_competence"
									:alt="competence.nom_competence"
									:title="competence.nom_competence"
									class="competences__icon">
							<div class="competences__bande">
								<div
										class="competences__bande-fill"
										:style="{'width': competence.pourcentage_maitrise + '%'}">
								</div>
							</div>
						</li>
					</ul>
				</div>
				<div class="col-md-6">
					<div class="competences-distinctions__title-wrapper">
						<img src="../assets/svg/medaille.svg" alt="Médaille"
						     class="competences-distinctions__title-icon">
						<h2 class="competences-distinctions__title">Distinctions</h2>
					</div>
					<ul class="distinctions">
						<li
								v-for="distinction in distinctions"
								class="distinctions__item">
							<p class="distinctions__item-titre">{{ distinction.nom_prix }}</p>
							<p class="distinctions__item-description">{{ distinction.description_prix }}</p>
							<p class="distinctions__item-annee">{{ distinction.annee }}</p>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<svg version="1.1"
		     xmlns="http://www.w3.org/2000/svg"
		     viewBox="0 0 1920 150"
		     class="section-cache">
			<polygon class="section-cache__path" points="0,150 1920,0 1920,150"></polygon>
		</svg>
	</section>
</template>

<script>
	import {store} from "../store/store";

	export default {
		name: "competences-distinctions",
		computed: {
			distinctions() {
				return store.homePage.acf.liste_distinctions;
			},
			competences() {
				return store.homePage.acf.liste_competences;
			}
		},
	}
</script>

<style scoped>

</style>