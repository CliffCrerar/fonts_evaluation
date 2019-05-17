// index javascript files

import getFontsFromStyle from './getFonts';

(() => {
	const appFunctions = [getFontsFromStyle];

	for (let idx = 0; idx < appFunctions.length; idx++) {
		appFunctions[idx]();
	}
})()
