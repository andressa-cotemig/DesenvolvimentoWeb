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
        this.setState({ altura: newAltura.replace(",",".") });
    }

    render() {
        const { nome, idade, sexo, peso, altura } = this.state;
        return (
            <div>
                <div>
                    Nome: <input
                        onChange={(e) => this.changeNome(e.target.value)}
                    />
                </div>
                <div>
                    Idade: <input
                        onChange={(e) => this.changeIdade(e.target.value)}
                    />
                </div>
                <div>
                    Sexo:
                    <input type="radio" id="html" name="sexo" value="Feminino" onChange={(e) => this.changeSexo(e.target.value)} /> Feminino
                    <input type="radio" id="css" name="sexo" value="Masculino" onChange={(e) => this.changeSexo(e.target.value)} /> Masculino
                </div>
                <div>
                    Peso: <input
                        onChange={(e) => this.changePeso(e.target.value)}
                    />
                </div>
                <div>
                    Altura: <input
                        onChange={(e) => this.changeAltura(e.target.value)}
                    />
                </div>
                <br />
                <b>Resultado:</b>
                <div>
                    <div>
                        Nome:{nome}
                    </div>
                    <div>
                        Idade:{idade}
                    </div>
                    <div>
                        Sexo:{sexo}
                    </div>
                    <div>
                        Peso:{peso}
                    </div>
                    <div>
                        Altura:{altura}
                    </div>
                </div>

                <IMC sexo={sexo} peso={peso} altura={altura} />
            </div >
        )
    }
}