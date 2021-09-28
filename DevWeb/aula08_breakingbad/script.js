var requestURL = 'https://breakingbadapi.com/api/characters';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
	var personagens = request.response;
	console.log(personagens);
	const personagensDiv = document.createElement('div');
	personagensDiv.id = 'personagens'

	personagens.forEach(personagem => {
		const personagemDiv = document.createElement('div');
		personagemDiv.id = 'personagem'

		const nome = document.createElement('label');
		nome.appendChild(document.createTextNode('Nome: ' + personagem.name));
		personagemDiv.appendChild(nome);

		const aniversario = document.createElement('label');
		aniversario.appendChild(document.createTextNode('Aniversário: ' + personagem.birthday));
		personagemDiv.appendChild(aniversario);

		const status = document.createElement('label');
		status.appendChild(document.createTextNode('Status: ' + personagem.status));
		personagemDiv.appendChild(status);

		const foto = document.createElement('img');
		foto.src = personagem.img
		personagemDiv.appendChild(foto);

		personagensDiv.appendChild(personagemDiv);
	});

	const resultado = document.getElementById("resultado");
	resultado.appendChild(personagensDiv);
}
