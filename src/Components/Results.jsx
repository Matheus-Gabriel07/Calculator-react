import React from "react";

export default function Results({ result }) {
  return (
    <div className="result">
      {result !== null && <p>Result: {result}</p>}
    </div>
  );
}
