var requestURL = 'https://akabab.github.io/superhero-api/api/all.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
	var superHerois = request.response;
	console.log(superHerois);
	const tableHtml = document.createElement('table');
	const tableCabecalho = document.createElement('tr');
	tableCabecalho.innerHTML = '<th>Id</th> <th>Nome</th> <th>Genero</th> <th>Raça</th>'
	tableHtml.appendChild(tableCabecalho)

	superHerois.forEach(superHeroi => {
		const linha = document.createElement('tr');

		const id = document.createElement('td');
		id.appendChild(document.createTextNode(superHeroi.id));
		linha.appendChild(id);

		const nome = document.createElement('td');
		nome.appendChild(document.createTextNode(superHeroi.name));
		linha.appendChild(nome);

		const genero = document.createElement('td');
		genero.appendChild(document.createTextNode(superHeroi.appearance.gender));
		linha.appendChild(genero);

		const raca = document.createElement('td');
		raca.appendChild(document.createTextNode(superHeroi.appearance.race));
		linha.appendChild(raca);

		tableHtml.appendChild(linha);
	});

	const resultado = document.getElementById("resultado");
	resultado.appendChild(tableHtml);
}
