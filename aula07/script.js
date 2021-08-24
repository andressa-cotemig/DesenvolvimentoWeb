
// salvando uma string simples no localstorage
localStorage.setItem('nome', 'Andressa');
const nome = localStorage.getItem('nome');

const Aluno = {
	'nome': 'Andressa',
	'sobrenome': 'Oliveira'
};

// conversão para string, localstorage só aceita string
localStorage.setItem('aluno', JSON.stringify(Aluno));
const alunoStr = localStorage.getItem('aluno');

// conversão para json 
const aluno = JSON.parse(alunoStr)
