<template>
	<transition
			name="custom-classes-animation"
			enter-active-class="animated fadeIn"
			leave-active-class="animated fadeOut">
		<a
				href="javascript:;"
				class="back-to-top page__back-to-top"
				v-if="isVisible">
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
		computed: {
			isVisible() {
				return this.apparitionPoint <= store.browserWindow.scroll;
			}
		}
	}
</script>