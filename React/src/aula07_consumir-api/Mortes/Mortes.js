import React from 'react';

export default class Mortes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mortes: []
        };
    }

    componentDidMount() {
        fetch('https://breakingbadapi.com/api/deaths')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    mortes: res
                });
            });
    }

    render() {
        const { mortes } = this.state;
        return (
            <div>
                <h1>Lista de mortes:</h1>

                <ul>
                    {mortes.map((item) => (
                        <li key={item.death_id}>
                            <p><b>Morto:</b> {item.death}</p>
                            <p><b>Causa:</b> {item.cause}</p>
                            <p><b>Ultimas palavras:</b> {item.last_words}</p>
                            <p><b>Assassino:</b> {item.responsible}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}