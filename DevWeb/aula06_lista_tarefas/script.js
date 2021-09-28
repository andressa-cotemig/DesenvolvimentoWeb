console.log('rodando');
let lista = [];

function enviar() {
	const item = document.getElementsByTagName('input')
	lista.push(item[0].value)
	console.log(lista)

	const resultado = document.createElement("div");
	resultado.appendChild(document.createTextNode(item[0].value));

	const final = document.getElementById('resultado');
	final.appendChild(resultado)
}