console.log('rodando');
localStorage.clear();

function enviar() {
	const cliente = document.querySelector('#cliente').value;
	const carga = document.getElementsByClassName('carga')[0].value;
	const valor = document.getElementById('valor').value;

	const pedidosStr = localStorage.getItem('pedidos');
	const pedido = cliente + ' - ' + carga + ' - ' + valor;
	let pedidos = [];

	if (pedidosStr) {
		pedidos = JSON.parse(pedidosStr);
	}
	pedidos.push(pedido)
	localStorage.setItem('pedidos', JSON.stringify(pedidos));
}

function exibir() {
	const listaStr = localStorage.getItem('pedidos');
	const lista = JSON.parse(listaStr);
	localStorage.removeItem('lista');

	const listaHtml = document.createElement('ul');
	listaHtml.id = "lista";
	lista.forEach(item => {
		const li = document.createElement('li');
		const itemText = document.createTextNode(item);
		li.appendChild(itemText);
		listaHtml.appendChild(li);
	});

	const resultado = document.getElementById("resultado");
	if (resultado.firstChild) {
		resultado.removeChild(resultado.firstChild);
	}
	resultado.appendChild(listaHtml);
}

function limpar() {
	localStorage.clear()
	const resultado = document.getElementById("resultado");
	while (resultado.firstChild) {
		resultado.removeChild(resultado.firstChild);
	}
}