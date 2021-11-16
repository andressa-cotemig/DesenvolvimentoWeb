import React, { useState, useEffect } from 'react';

export default function Contadores() {
    const [count, setCount] = useState(0);
    const [countUm, setCountUm] = useState(1);
    const [countDois, setCountDois] = useState(2);
    const [countTres, setCountTres] = useState(3);


    useEffect(() => {
        document.title = `Você clicou no 1: ${countUm}`;
    }, [countUm]);

    useEffect(() => {
        document.title = `Você clicou no 2: ${countDois}`;
    }, [countDois]);

    useEffect(() => {
        document.title = `Você clicou no 3: ${countTres}`;
    }, [countTres]);

    useEffect(() => {
        console.log(`Valor total: ${count}`);
    });


    return (
        <div className="Contadores">
            <div>
                <p>Contador 1: {countUm}</p>
                <button onClick={() => { setCountUm(countUm + 1); setCount(count + 1) }}>
                    Clique Aqui
                </button>
            </div>
            <div>
                <p>Contador 2: {countDois}</p>
                <button onClick={() => { setCountDois(countDois + 2); setCount(count + 1) }}>
                    Clique Aqui
                </button>
            </div>
            <div>
                <p>Contador 3: {countTres}</p>
                <button onClick={() => { setCountTres(countTres + 3); setCount(count + 1) }}>
                    Clique Aqui
                </button>
            </div>
        </div>
    );
}
