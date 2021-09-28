const click = (nome, descricao) => {
  return alert(`${nome} é ${descricao}`)
}

const lista = [
  { nome: "Arroz", descricao: "branco" },
  { nome: "Feijão", descricao: "marrom" },
  { nome: "Carne", descricao: "vermelha" },
  { nome: "Salada", descricao: "verde" }
];

const Nome = () => <p>Andressa</p>
const Cotemig = () => <img src="https://fencom.coop.br/wp-content/uploads/2020/01/cotemig-2.jpg" alt="cotemig" />

function Aula02() {
  return (
    <div className="Aula02">
      <ul>
        {
          lista.map((item, index) =>
            <li key={index} onClick={() => click(item.nome, item.descricao)}><button>{item.nome}</button></li>)
        }
      </ul>
      <Nome />
      <Cotemig />
    </div>
  );
}

export default Aula02;
