
function enviar() {
	const item = document.getElementsByTagName('input')
	listaTarefa.push(item[0].value)
	localStorage.setItem('lista', JSON.stringify(listaTarefa));
}

function exibir() {
	const listaStr = localStorage.getItem('lista');
	const lista = JSON.parse(listaStr);
	localStorage.removeItem('lista');
	listaTarefa = [];

	const listaHtml = document.createElement('ul');
	listaHtml.id = "lista";
	lista.forEach(item => {
		const li = document.createElement('li');
		const itemText = document.createTextNode(item);
		li.appendChild(itemText);
		listaHtml.appendChild(li);
	});

	const resultado = document.getElementById("resultado");
	while (resultado.firstChild) {
		resultado.removeChild(resultado.firstChild);
	}
	resultado.appendChild(listaHtml);
}