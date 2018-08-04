<template>
	<div class="page">
		<project :project="project"></project>
		<projects-nav
				:previous="previousProject"
				:next="nextProject"></projects-nav>
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
				projectSlug: '',
				project: {},
				projectIndex: 0,
			}
		},
		methods: {
			getProjectDetails() {
				// Enregistrement des informations sur le projet
				this.projectSlug = this.$route.params.slug;
				this.project = store.projects.find(project => project.slug === this.projectSlug);
				this.projectIndex = store.projects.findIndex(project => project.slug === this.projectSlug);
			}
		},
		computed: {
			previousProject() {
				if(this.projectIndex === 0) {
					return store.projects[store.projects.length - 1];
				}
				return store.projects[this.projectIndex - 1];
			},

			nextProject() {
				if(this.projectIndex === store.projects.length - 1) {
					return store.projects[0];
				}
				return store.projects[this.projectIndex + 1];
			}
		},
		watch: {
			'$route'(to, from) {
				this.getProjectDetails();
			}
		},
		beforeMount() {
			this.getProjectDetails();
		}
	}
</script>