import objectFitImages from 'object-fit-images';

import { HomePage } from './src/Homepage';

jQuery(document).ready($ => {
	const win = $(window);

	objectFitImages();

	// Initialisation des éléments
	const home = new HomePage();
});
