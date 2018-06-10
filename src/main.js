import objectFitImages from 'object-fit-images';
import Vue from 'vue'
import App from './App.vue'

// Pour les images
document.addEventListener('DOMContentLoaded', () => objectFitImages());

// VueJS
new Vue({
	el: '#app',
	render: h => h(App)
});