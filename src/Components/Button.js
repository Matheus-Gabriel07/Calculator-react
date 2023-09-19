import React from "react";
import "button.css";

export default function button() {

  /**
   * @param {Function} onSubmit -  função que executa operações
   *  matemáticas com base nos valores de entrada input1 e input2
   *  e na operação especificada, em seguida, define o resultado
   *  usando a função setResult que é passada como uma prop.
   */
  const onSubmit = () => {
    const { input1, input2, operation, setResult } = props;

    let operationResult;
    switch (operation) {
      case "+":
        operationResult = input1 + input2;
        break;

      case "-":
        operationResult = input1 - input2;
        break;

      case "*":
        operationResult = input1 * input2;
        break;

      case "/":
        if (input2 === 0) {
          alert("Não é possivel dividir por zero");
          return;
        }
        operationResult = input1 / input2;
        break;

      default:
        alert("Operação Invalida.");
        return;
    }

    /**
     * @param {Function} setResult - referência à função passada como 
     * propriedade (props) para o componente. Ela é usada para definir
     * o resultado de uma operação matemática.
     * 
     * @param {number} operationResult - O resultado da operação matemática
     */
    setResult(operationResult);
  };

  return (
    <div className="button">
      <button onClick={onSubmit} className="button-operation">
        {props.type}
      </button>
    </div>
  );
}
