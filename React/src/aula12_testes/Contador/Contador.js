import React, { useState } from "react";
import "./Contador.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function getClass() {
    if (counter > 0) return "counter__title--increment";
    if (counter < 0) return "counter__title--decrement";
    return "";
  }

  return (
    <div className="counter">
      <h1 className={`counter__title ${getClass()}`}>{counter}</h1>
      <section className="buttons">
        <button
          onClick={() => setCounter(counter + 1)}
          className="button button--increment"
        >
          incrementar
        </button>
        <button
          onClick={() => setCounter(counter - 1)}
          className="button button--decrement"
        >
          decrementar
        </button>
      </section>
    </div>
  );
}