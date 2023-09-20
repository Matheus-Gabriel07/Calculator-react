import React from "react";
import "./button.css";

export default function Button(props) {
  const { input1, input2, operation, setResult } = props;

  /**
   * Função que executa operações matemáticas com base nos valores de entrada input1 e input2
   * e na operação especificada, em seguida, define o resultado
   * usando a função setResult que é passada como uma prop.
   */
  const onSubmit = () => {
    let operationResult;
    switch (operation) {
      case "+":
        operationResult = input1 + input2;
        break;

      case "-":
        operationResult = input1 - input2;
        break;

      case "x":
        operationResult = input1 * input2;
        break;

      case "/":
        if (input2 === 0) {
          alert("Não é possível dividir por zero");
          return;
        }
        operationResult = input1 / input2;
        break;

      default:
        alert("Operação Inválida.");
        return;
    }

    // Define o resultado usando a função setResult passada como prop.
    setResult(operationResult);
  };

  return (
    <div className="button">
      <button onClick={onSubmit} className="button-operation">
        {operation}
      </button>
    </div>
  );
}
