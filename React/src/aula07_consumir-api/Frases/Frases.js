import React from 'react';

export default class Frases extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frases: []
        };
    }

    componentDidMount() {
        fetch('https://breakingbadapi.com/api/quotes')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    frases: res
                });
            });
    }

    render() {
        const { frases } = this.state;
        return (
            <div>
                <h1>Lista de frases:</h1>

                <ul>
                    {frases.map((item) => (
                        <li key={item.quote_id}>
                            <p><b>Frase:</b> {item.quote}</p>
                            <p><b>Autor:</b> {item.author}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}