
console.log('document', document)

const campo = document.querySelector('.campo');
console.log('campo', campo)

const div = document.querySelector('div');
console.log('div', div)

const divs = document.querySelectorAll('div');
console.log('divs', divs)

const campos = document.getElementsByClassName('campo');
console.log('campos', campos)

const buttons = document.getElementsByTagName('button');
console.log('buttons', buttons)

function enviar() {
	const nomeResult = document.getElementById('nome')
	console.log('nome', nomeResult.value)

	const sobrenomeResult = document.getElementsByClassName('sobrenome')
	console.log('sobrenome', sobrenomeResult[0].value)

	const periodoResult = document.querySelector("input[type='radio']:checked")
	console.log('periodo', periodoResult.value)

	inserirNaTela(nomeResult.value, sobrenomeResult[0].value, periodoResult.value)
}

function setDefault() {
	document.getElementById('nome').setAttribute('value', 'Nome Default')

	document.getElementsByClassName('sobrenome')[0].setAttribute('value', 'Sobrenome Default')

	document.querySelector("input[type='radio'][value='periodo2'").setAttribute('checked', true);

	document.querySelector("input[type='radio'][value='periodo3'").setAttribute('disabled', true);
}

function inserirNaTela(nome, sobrenome, periodo) {
	let divNova = document.createElement("div");
	divNova.id = nome;
	console.log('divNova', divNova);

	const result = nome + ' ' + sobrenome + ' ' + periodo;
	const conteudoNovo = document.createTextNode(result);
	divNova.appendChild(conteudoNovo);

	const buttonDefault = document.getElementById('buttonDefault');
	document.body.insertBefore(divNova, buttonDefault);

	console.log('element', document.getElementById(nome));
}

function remover() {
	const element = document.getElementById('excluir');
	element.remove()

	const botaoExcluir = document.getElementById('buttonRemover');
	botaoExcluir.setAttribute('disabled', true)
}

function inserir() {
	const h1 = document.createElement('h1');
	h1.appendChild(document.createTextNode('titulo'));

	const final = document.getElementById('final');
	final.appendChild(h1)
}
