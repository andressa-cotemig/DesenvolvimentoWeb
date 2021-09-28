console.log('rodando');

function enviar() {
	const cliente = document.querySelector('#cliente');
	const carga = document.getElementsByClassName('carga');
	const valor = document.getElementById('valor');
	console.log(cliente.value, carga[0].value, valor.value);

	const resultado = document.createElement("div");
	resultado.appendChild(document.createTextNode(cliente.value + ' ' + carga[0].value + ' ' + valor.value));

	const final = document.getElementById('resultado');
	final.appendChild(resultado)
}