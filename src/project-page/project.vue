<template>
	<section class="project">
		<div class="container-fluid project__container">
			<div class="row project__row">
				<div class="col-xl-5 col-lg-6 project__image-wrapper">
					<img :src="projectImage.src" :alt="projectImage.alt" class="project__img">
				</div>
				<div class="col-xl-5 col-lg-6">
					<h1 class="project__title">{{ project.title.rendered }}</h1>
					<p class="project__contexte-realisation" v-html="contexteRealisation"></p>
					<div class="project__description" v-html="project.content.rendered"></div>
					<h2 class="project__subtitle">Outils utilisés</h2>
					<ul class="project__tools">
						<li v-for="tool in tools">{{ tool.nom_logiciel }}</li>
					</ul>
					<div class="project__button-wrapper" v-if="project.acf.lien_vers_projet">
						<a :href="project.acf.lien_vers_projet" target="_blank" class="button">Voir le projet<i class="icon-right-open-mini"></i></a>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	import {stringUtils} from "../shared/classes/string-utils";

	export default {
		name: "project",
		props: {
			project: {
				type: Object,
				required: true
			},
		},
		computed: {
			/**
			 * Prépare le contexte de réalisation et la liste des membres de l'équipe pour affichage dans le template
			 * @return {string}
			 */
			contexteRealisation() {
				let contexteString = '';

				// Contexte de réalisation
				contexteString += this.project.acf.contexte_realisation;

				// Liste des coéquipiers si nécessaire
				const coequipiers = this.project.acf.coequipiers;
				if(coequipiers) {
					contexteString += ', réalisé avec ';
					for(let i = 0; i < coequipiers.length; i++) {
						// Noms et portfolios
						if(coequipiers[i].portfolio_coequipier) {
							contexteString += `<a href="${ coequipiers[i].portfolio_coequipier }" target="_blank">${ coequipiers[i].nom_coequipier }</a>`;
						} else {
							contexteString += coequipiers[i].nom_coequipier;
						}
						// Ponctuation
						if(i === coequipiers.length - 2) {
							contexteString += ' et ';
						} else if (i !== coequipiers.length - 1) {
							contexteString += ', ';
						}
					}
				}
				return contexteString;
			},
			tools() {
				return this.project.acf.locigiels_utilises;
			},
			projectImage() {
				// Certains formats d'images n'existent pas pour tous les projects, donc on va chercher parmi les formats jusqu'à ce qu'on en trouve une qui existe
				const possibleSizes = ['projet-single', 'medium_large', 'full'];
				const projectImage = this.project.featuredMediaDetails.media_details.sizes;
				let projectImageUrl = '';
				for(let i = 0; i < possibleSizes.length; i++) {
					if(projectImage[possibleSizes[i]]) {
						projectImageUrl = projectImage[possibleSizes[i]].source_url;
						break;
					}
				}

				return {
					src: projectImageUrl,
					alt: this.project.featuredMediaDetails.alt_text
				};
			}
		},
	}
</script>