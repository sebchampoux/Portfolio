<template>
	<div class="page">
		<project :project="project"></project>
		<projects-nav></projects-nav>
	</div>
</template>

<script>
	import {store} from "../store/store";
	import {config} from "../config/config";
	import APIRequester from '../shared/classes/api-requester';
	import Project from "./project";
	import ProjectsNav from "./projects-nav";

	export default {
		name: "project-page",
		components: {ProjectsNav, Project},
		data() {
			return {
				apiRequester: new APIRequester(config.ajax_url)
			}
		},
		methods: {
			/**
			 * Si le projet n'a pas déjà été chargé (ex. accès direct), on va le charger
			 */
			loadProject() {
				// Si le projet existe déjà, on s'arrête ici
				const projectSlug = this.$route.params.slug;
				if(store.projects.find(project => project.slug === projectSlug)) return;

				// Sinon on charge le projet
				this.apiRequester.getProjects({
					slug: projectSlug
				}).then(
					successData => {
						const project = successData.body[0];
						this.apiRequester.getMediaById(project.featured_media).then(
							successData => {
								project.featuredMediaDetails = successData.body;
								store.projects.push(project);
								console.log(store.projects);
							},
							errorData => console.log(errorData)
						);
					},
					errorData => console.log(errorData)
				);
			}
		},
		computed: {
			project() {
				const projectSlug = this.$route.params.slug;
				return store.projects.find(project => project.slug === projectSlug);
			}
		},
		created() {
			this.loadProject();
		}
	}
</script>