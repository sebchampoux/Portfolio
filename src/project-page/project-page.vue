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
		computed: {
			project() {
				const projectSlug = this.$route.params.slug;
				return store.projects.find(project => project.slug === projectSlug);
			}
		}
	}
</script>