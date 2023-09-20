import React from "react";

export default function Results({ result }) {
  return (
    <div className="result">
      <p>{result !== null ? result : "0"}</p>
    </div>
  );
}
