import React from 'react';
import './Personagens.scss'

export default class Personagens extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personagens: []
        };
    }

    componentDidMount() {
        fetch('https://breakingbadapi.com/api/characters')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    personagens: res
                });
            });
    }

    obterOcupacao(ocupacoes) {
        return ocupacoes.map((ocupacao, index) => (
            <label key={index}> {ocupacao};</label>
        ));
    }

    render() {
        const { personagens } = this.state;
        return (
            <div>
                <h1>Lista de Personagens:</h1>

                <ul>
                    {personagens.map((item) => (
                        <li key={item.char_id}>
                            <p><b>Nome:</b> {item.name}</p>
                            <p><b>Nascimento:</b> {item.birthday}</p>
                            <p><img className={'personagem-bb'} src={item.img} alt={item.name} /></p>
                            <p><b>Status:</b> {item.status}</p>
                            <p><b>Ocupação:</b> {this.obterOcupacao(item.occupation)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}