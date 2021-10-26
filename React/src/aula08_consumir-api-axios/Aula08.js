import React from 'react';
import api from '../service/api';

export default class Aula08 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      digimonsOriginal: [],
      digimons: []
    }
  }

  componentDidMount() {
    api.get("/digimon")
      .then((response) => this.setDigimons(response.data))
  }

  setDigimons(dados) {
    this.setState({
      digimonsOriginal: dados,
      digimons: dados
    })
  }

  pesquisar(texto) {
    const { digimonsOriginal } = this.state;
    const dadosFiltrados = digimonsOriginal.filter(digimon =>
      (digimon.name.toLowerCase().includes(texto.toLowerCase()))
    )
    this.setState({
      digimons: dadosFiltrados
    })
  }

  render() {
    const { digimons } = this.state;
    return (
      <div className="Aula-08">
        <h1>Digimons</h1>
        <input onChange={(e) => this.pesquisar(e.target.value)} />
        <ul>
          {
            digimons.map((item, index) => (
              <li key={index}>
                <p>Nome: {item.name}</p>
                <p>Level: {item.level}</p>
                <img src={item.img} alt={item.name} />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}