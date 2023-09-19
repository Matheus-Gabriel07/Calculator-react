import React, { useState } from "react";
import Button from "./Button";
import Results from "Results.jsx"
import "calculator.css";

export default function calculator() {
  const [inputValue1, setInputValue1] = useState(0);
  const [inputValue2, setInputValue2] = useState(0);

  /**
   * @param {Function} inputChange - função de manipulação de eventos
   *  que convertem os valores dos campos de entrada em números de
   *  ponto flutuante e atualizam as variáveis de estado
   *  correspondentes. */
  const inputChange1 = (e) => {
    setInputValue1(parseFloat(e.target.value));
  };

  const inputChange2 = (e) => {
    setInputValue2(parseFloat(e.target.value));
  };

  const reset = () => {
    setInputValue1(0);
    setInputValue2(0);
    setResult(null);
  };

  return (
    <div className="calculator">
      <div className="calculator-input-container">
      <input
        className="calculator-inputs"
        value={inputValue1}
        onChange={inputChange1}
      ></input>
      <input
        className="calculator-inputs"
        value={inputValue2}
        onChange={inputChange2}
      ></input>
      </div>

      <div className="calculator-button-container">
        <Button operation="+" input1={inputValue1} input2={inputValue2}>
          +
        </Button>
        <Button operation="-" input1={inputValue1} input2={inputValue2}>
          -
        </Button>
        <Button operation="*" input1={inputValue1} input2={inputValue2}>
          x
        </Button>
        <Button operation="/" input1={inputValue1} input2={inputValue2}>
          /
        </Button>
      </div>
      <Results result={result} />
      <button onClick={reset}>CE</button>
    </div>
  );
}
