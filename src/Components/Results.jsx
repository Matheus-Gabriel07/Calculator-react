import React from "react";

export default function Results({ result }) {
  return (
    <div className="result">
      {result !== null && <p> {result} </p>}
    </div>
  );
}
