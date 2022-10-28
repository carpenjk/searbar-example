import React from 'react';

function Results({ results }) {
  return (
    <div className="results">
      <h1>Results</h1>
      <div className="results__columnNames">
        <h3>Name</h3>
        <h3>Size</h3>
        <h3>Color</h3>
        <h3>Price</h3>
      </div>
      <ul>
        {results.map((result) => (
          <li key={result.sku}>
            <div className="results__name">{result.name}</div>
            <div className="results__size">{result.size}</div>
            <div className="results__color">{result.color}</div>
            <div className="results__price">
              $
              {result.price}
            </div>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Results;
