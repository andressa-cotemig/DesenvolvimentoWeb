import React from 'react';
import Botao from '../Botao/Botao';

export default class IMC extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valor: null,
            categoria: '',
            exibir: false
        };
    }

    calculaIMCfeminino = (calculo) => {
        if (calculo < 19)
            return 'Abaixo do peso';

        if (calculo <= 23.9)
            return 'Normal';

        if (calculo <= 28.9)
            return 'Obesidade leve';

        if (calculo <= 28.9)
            return 'Obesidade moderada';

        return 'Obesidade mórbida';
    }

    calculaIMCmasculino = (calculo) => {
        if (calculo < 20)
            return 'Abaixo do peso';

        if (calculo <= 24.9)
            return 'Normal';

        if (calculo <= 29.9)
            return 'Obesidade leve';

        if (calculo <= 39.9)
            return 'Obesidade moderada';

        return 'Obesidade mórbida';
    }

    calculoIMC = () => {
        const { sexo, peso, altura } = this.props;
        const calculo = peso / (altura * altura);
        let resultado = null;

        if (this.validaInformacoes()) {

            if (sexo === 'Feminino') {
                resultado = this.calculaIMCfeminino(calculo);
            }
            else if (sexo === 'Masculino') {
                resultado = this.calculaIMCmasculino(calculo);
            }

            this.setState({
                valor: calculo,
                categoria: resultado,
                exibir: true
            });
        }
    };

    validaInformacoes = () => {
        const { sexo, peso, altura } = this.props;
        if (!sexo || !peso || !altura) {
            alert('Insira todos os dados')
            return false
        }
        return true
    }

    render() {
        const { valor, categoria, exibir } = this.state;

        return (
            <div>
                <h1>Calculo IMC</h1>
                <Botao onClick={() => this.calculoIMC()}>Calcular IMC</Botao>
                {exibir ? <div id="resultado">
                    Valor = {valor.toFixed(1)}<br />
                    Categoria = {categoria}
                </div> : null}
            </div>
        )
    }
}
