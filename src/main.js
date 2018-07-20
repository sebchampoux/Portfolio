import objectFitImages from 'object-fit-images';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import {routes} from "./routes/routes";

// Pour les images
document.addEventListener('DOMContentLoaded', objectFitImages);

// Routes
Vue.use(VueRouter);
const router = new VueRouter({
	routes
});

// VueJS
new Vue({
	el: '#app',
	render: h => h(App),
	router
});