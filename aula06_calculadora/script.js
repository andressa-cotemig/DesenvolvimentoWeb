
function calcular(oper) {
	const n1 = parseInt(document.getElementById('num1').value);
	const n2 = parseInt(document.getElementById('num2').value);

	switch (oper) {
		case '-': {
			resultado = document.createTextNode(n1 - n2);
			break;
		};
		case '*': {
			resultado = document.createTextNode(n1 * n2);
			break;
		};
		case '/': {
			resultado = document.createTextNode(n1 / n2);
			break;
		};
		case '+': {
			resultado = document.createTextNode(n1 + n2);
			break;
		};
		default: {
			resultado = document.createTextNode('Erro');
			break;
		}
	}
	const resultadoDiv = document.getElementById('resultado');
	let valor = document.getElementById('valor');
	if (valor) {
		resultadoDiv.removeChild(valor);
	}
	valor = document.createElement('h1');
	valor.id = 'valor';
	valor.appendChild(resultado);
	resultadoDiv.appendChild(valor);
	console.log(n1, oper, n2, '=', resultado);
}