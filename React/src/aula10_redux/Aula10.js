import React from 'react';
import './Aula10.scss'

export default class Aula10 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { inputValue: '' }
  }

  inputChange(valor) {
    this.setState({
      inputValue: valor
    })
  }

  render() {
    const { clickButton, newValue } = this.props;
    const { inputValue } = this.state;

    return (
      <div className="Aula10">
        <input
          onChange={(event) => this.inputChange(event.target.value)}
          type='text'
          value={inputValue}
        />
        <button onClick={() => clickButton(inputValue)}>
          Click me!
        </button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}