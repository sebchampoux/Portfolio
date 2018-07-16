import FrontPage from '../front-page/front-page';
import ProjectPage from '../project-page/project-page';

/**
 * Routes pour le site
 * @type {Array}
 */
export const routes = [
	{
		path: '',
		component: FrontPage
	},
	{
		path: '/projet/:slug',
		component: ProjectPage
	}
];