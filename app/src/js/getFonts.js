/**
 * Get fonts
 *
 * @summary Get fonts from global object
 * @author Cliff Crerar
 *
 * Created at     : 2019-04-21 04:00:27
 * Last modified  : 2019-04-21 04:22:50
 */

function getFontsFromStyle() {
	console.log('getting fonts');
	console.log(this);
	console.log(window)
}

export default getFontsFromStyle;