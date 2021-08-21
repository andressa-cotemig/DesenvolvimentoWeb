
function calcular(oper) {
	const n1 = parseInt(document.getElementById('num1').value);
	const n2 = parseInt(document.getElementById('num2').value);

	switch (oper) {
		case '-': {
			resultado = n1 - n2;
			break;
		};
		case '*': {
			resultado = n1 * n2;
			break;
		};
		case '/': {
			resultado = n1 / n2;
			break;
		};
		case '+': {
			resultado = n1 + n2;
			break;
		};
		default: {
			resultado = 'Erro';
			break;
		}
	}
	console.log(n1, oper, n2, '=', resultado)
}