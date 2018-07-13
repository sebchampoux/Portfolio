<template>
	<div class="page">
		<project></project>
		<projects-nav></projects-nav>
	</div>
</template>

<script>
	import Project from "./project";
	import ProjectsNav from "./projects-nav";
	export default {
		name: "project-page",
		components: {ProjectsNav, Project}
	}
</script>

<style scoped>

</style>