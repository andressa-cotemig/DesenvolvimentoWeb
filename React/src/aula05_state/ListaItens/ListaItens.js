import React from 'react';

export default class ListaItens extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      descricao: null
    };
  }

  click = (nome, descricao) => {
    this.setState({ descricao: `${nome} é ${descricao}` });
  }

  Nome = () => <p>Andressa</p>
  Cotemig = () => <img src="https://fencom.coop.br/wp-content/uploads/2020/01/cotemig-2.jpg" alt="cotemig" />

  render() {
    const lista = [
      { nome: "Arroz", descricao: "branco" },
      { nome: "Feijão", descricao: "marrom" },
      { nome: "Carne", descricao: "vermelha" },
      { nome: "Salada", descricao: "verde" }
    ];
    return (
      <div className="ListaItens">
        <ul>
          {
            lista.map((item, index) =>
              <li key={index} onClick={() => this.click(item.nome, item.descricao)}><button>{item.nome}</button></li>)
          }
        </ul>
        {this.Nome()}
        {this.Cotemig()}
        {this.state.descricao}
      </div>
    );
  }
}
