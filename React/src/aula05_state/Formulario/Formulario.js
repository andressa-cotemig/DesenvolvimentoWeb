import React from 'react';
import IMC from '../IMC/IMC';

export default class Formulario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nome: '',
            idade: '',
            sexo: '',
            peso: '',
            altura: ''
        };
    }

    changeNome(newNome) {
        this.setState({ nome: newNome });
    }

    changeIdade(newIdade) {
        this.setState({ idade: newIdade });
    }

    changeSexo(newSexo) {
        this.setState({ sexo: newSexo });
    }

    changePeso(newPeso) {
        this.setState({ peso: newPeso });
    }

    changeAltura(newAltura) {
        this.setState({ altura: newAltura.replace(",", ".") });
    }

    render() {
        const { nome, idade, sexo, peso, altura } = this.state;
        return (
            <div>
                <h1>Dados:</h1>
                <div>
                    <label>Nome:</label>
                    <input
                        onChange={(e) => this.changeNome(e.target.value)}
                    />
                </div>

                <div>
                    <label>Sexo:</label>
                    <input type="radio" name="sexo" value="Feminino" onChange={(e) => this.changeSexo(e.target.value)} /> Feminino
                    <input type="radio" name="sexo" value="Masculino" onChange={(e) => this.changeSexo(e.target.value)} /> Masculino
                </div>

                <div>
                    <label>Idade:</label>
                    <input
                        onChange={(e) => this.changeIdade(e.target.value)}
                    />
                </div>

                <div>
                    <label>Peso:</label>
                    <input
                        onChange={(e) => this.changePeso(e.target.value)}
                    />
                </div>

                <div>
                    <label>Altura:</label>
                    <input
                        onChange={(e) => this.changeAltura(e.target.value)}
                    />
                </div>

                <div id="resultado-formulario">
                    <h1>Resultado</h1>
                    <div>Nome: {nome}</div>
                    <div>Sexo: {sexo}</div>
                    <div>Idade: {idade}</div>
                    <div>Peso: {peso}</div>
                    <div>Altura: {altura}</div>
                </div>

                <IMC sexo={sexo} peso={peso} altura={altura} />
            </div >
        )
    }
}