import React, { useState, useEffect } from 'react';
import './Aula11.scss'
import Contadores from './Contadores';

export default function Aula11() {
    //Declara uma nova variável de state, que chamaremos de "count"
    const [count, setCount] = useState(0);

    //Similar ao componentDidMount e componentDidUpdate:
    useEffect(() => {
        // Atualiza o titulo do documento usando a API do browser
        document.title = `Você clicou ${count} vezes`;
    });

    return (
        <div className="Aula11">
            <Contadores />
            <p>Quantidade de cliques: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Clique aqui
            </button>
        </div>
    );
}
