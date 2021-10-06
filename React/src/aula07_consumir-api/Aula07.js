import React from 'react';
import Episodios from './Episodios/Episodios';
import Frases from './Frases/Frases';
import Mortes from './Mortes/Mortes';
import Personagens from './Personagens/Personagens';
import Sobre from './Sobre/Sobre';

export default class Aula07 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      aba: 1
    }
  }

  mudaAba(novaAba) {
    this.setState({
      aba: novaAba
    })
  }

  renderConteudo(aba) {
    switch (aba) {
      case 1:
        return <Sobre />
      case 2:
        return <Episodios />
      case 3:
        return <Personagens />
      case 4:
        return <Mortes />
      case 5:
        return <Frases />
      default:
        return null;
    }
  }

  render() {
    const { aba } = this.state;

    return (
      <div id="breaking-bad-page">
        <button onClick={() => this.mudaAba(1)}>Sobre</button>
        <button onClick={() => this.mudaAba(2)}>Episodios</button>
        <button onClick={() => this.mudaAba(3)}>Personagens</button>
        <button onClick={() => this.mudaAba(4)}>Mortes</button>
        <button onClick={() => this.mudaAba(5)}>Frases</button>
        {this.renderConteudo(aba)}
      </div>
    );
  }
}