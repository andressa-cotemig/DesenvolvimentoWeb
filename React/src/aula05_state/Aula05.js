import React from 'react';
import ListaItens from './ListaItens/ListaItens';

export default class Aula05 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      showName: false
    };
  }

  changeName(newName) {
    this.setState({ name: newName });
  }

  changeShowName() {
    this.setState({ showName: !this.state.showName })
  }

  render() {
    return (
      <div>
        {this.state.showName ?
          <h1>Meu nome é: {this.state.name}</h1>
          : null}

        <input
          onChange={(e) => this.changeName(e.target.value)}
        />

        <button onClick={() => this.changeShowName()}>
          {this.state.showName ? 'Ocultar Nome' : 'Mostrar Nome'}
        </button>

        <ListaItens />
      </div>
    )
  }
}
