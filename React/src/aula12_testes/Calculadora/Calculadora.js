import React, { useState } from "react";

export const Calcular = {

}


export default function Calculadora() {
  const [numA, setNumA] = useState(0);
  const [numB, setNumB] = useState(0);

  return (
    <div className="calculadora">
      <input onChange={(e) => setNumA(e.target.value)} />
      <input onChange={(e) => setNumB(e.target.value)} />
      <div>
        <button onClick={() => Calcular.somar(numA, numB)}>
          somar
        </button>
        <button onClick={() => Calcular.subtrair(numA, numB)}>
          subtrair
        </button>
        <button onClick={() => Calcular.dividir(numA, numB)}>
          dividir
        </button>
        <button onClick={() => Calcular.multiplicar(numA, numB)}>
          multiplicar
        </button>
      </div>
    </div >
  );
}