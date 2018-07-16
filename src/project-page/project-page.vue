<template>
	<div class="page">
		<project :project="{}"></project>
		<projects-nav></projects-nav>
	</div>
</template>

<script>
	import {store} from "../store/store";
	import Project from "./project";
	import ProjectsNav from "./projects-nav";

	export default {
		name: "project-page",
		components: {ProjectsNav, Project}
	}
</script>