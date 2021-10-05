import React from 'react';
import Header from './Header/Header';
import Container from "./Container/Container";
import { LifeCycle } from "./Lifecycle/Lifecycle";

export default class Aula06 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exibe: false,
      lifecyle: true
    };
  }

  click() {
    this.setState({
      exibe: !this.state.exibe,
    })
  }

  removeComponente() {
    this.setState({
      lifecyle: !this.state.lifecyle,
    })
  }

  render() {
    return (
      <div className="Aula06">
        <div className="item">
          <Header favcol="blue" />
        </div>
        <div className="item">
          <Container />
        </div>
        <div className="item">
          <button onClick={() => this.click()}>Clique aqui</button>
          <button onClick={() => this.removeComponente()}>Remove componente</button>
          {this.state.lifecyle && <LifeCycle exibicao={this.state.exibe} />}
        </div>
      </div>
    );
  }
}
