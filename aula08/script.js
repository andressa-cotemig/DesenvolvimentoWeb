var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState será 0

xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/', true);
console.log('OPENED', xhr.readyState); // readyState será 1

xhr.onprogress = function () {
	console.log('LOADING', xhr.readyState); // readyState será 3
};

xhr.onload = function () {
	console.log('DONE', xhr.readyState); // readyState será 4
};

xhr.send();

var requestURL = 'https://pokeapi.co/api/v2/pokemon/';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
	var resultado = request.response;
	console.log(resultado)
}
