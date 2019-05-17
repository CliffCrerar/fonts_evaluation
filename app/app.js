import './src'

function components() {
	const element = document.createElement('div');
	element.innerHTML = 'This is a test'
	return element
}

Promise.resolve(document.body.appendChild(components()))
	.then((resolved) => {
		console.log('resolved: ', resolved);
		//js();
	})
	.catch((err) => {
		console.error('ERROR!', err);
	})
