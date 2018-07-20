<template>
	<transition
			name="custom-classes-animation"
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut">
		<a
				href="#"
				class="back-to-top page__back-to-top"
				@click.prevent="scrollToTop"
				v-show="isVisible">
			<i class="back-to-top__icon icon-up"></i>
		</a>
	</transition>
</template>

<script>
	import {store} from "../../store/store";

	export default {
		name: "back-to-top",
		data() {
			return {
				apparitionPoint: 200
			}
		},
		methods: {
			scrollToTop() {
				store.smoothScrollTo('#top-anchor');
			}
		},
		computed: {
			isVisible() {
				return this.apparitionPoint <= store.browserWindow.scroll;
			}
		}
	}
</script>