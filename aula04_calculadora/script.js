const numero1 = 10;
const numero2 = 20;
const operador = '*';
calcular(numero1, numero2, operador);

function calcular(n1, n2, oper) {
	switch (oper) {
		case '+': {
			resultado = n1 + n2;
			break;
		};
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
		default: {
			resultado = 'Erro';
			break;
		}
	}
	console.log(n1, oper, n2, '=', resultado)
}