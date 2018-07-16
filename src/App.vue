<template>
	<div class="root">
		<transition
				enter-active-class="animated fadeIn"
				leave-active-class="animated fadeOut"
				mode="out-in">
			<template v-if="isLoading">
				<loading></loading>
			</template>
			<template v-else>
				<router-view></router-view>
			</template>
		</transition>
	</div>
</template>

<script>
	import {store} from "./store/store";
	import Loading from "./shared/components/loading";

	export default {
		name: 'app',
		components: {Loading},
		computed: {
			isLoading() {
				return store.isLoading;
			}
		}
	}
</script>

<style src="./assets/fontello/css/portfolio.css"></style>
<style src="../node_modules/animate.css/animate.css"></style>
<style lang="scss">@import "assets/scss/main";</style>