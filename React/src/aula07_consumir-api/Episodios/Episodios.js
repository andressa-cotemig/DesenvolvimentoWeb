import React from 'react';

export default class Episodios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            episodios: []
        };
    }

    componentDidMount() {
        fetch('https://www.breakingbadapi.com/api/episodes')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    episodios: res
                });
            })
            .catch((err) => {
                console.error("ops! ocorreu um erro: " + err);
            });
    }

    render() {
        const { episodios } = this.state;
        return (
            <div>
                <h1>Lista de episodios:</h1>

                <ul>
                    {episodios.map((item) => (
                        <li key={item.episode_id}>
                            <p><b>Episódio:</b> {item.episode} - {item.title}</p>
                            <p><b>Data:</b> {item.air_date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

