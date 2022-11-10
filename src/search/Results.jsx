import { useSearchBar } from '@carpenjk/searchbar';
import React from 'react';

function Results({ results }) {
  const { searchState: { values } } = useSearchBar();
  const selectedParams = Object.keys(values).filter((param) => values[param]
    && values[param].length > 0);
  console.log('🚀 ~ file: Results.jsx ~ line 8 ~ Results ~ selectedParams', selectedParams);

  function getParamValues(param) {
    const pValues = values[param];
    if (!Array.isArray(pValues)) {
      return pValues;
    }
    return pValues.reduce((str, v) => `${str}, ${v}`);
  }

  return (
    <div className="results">
      <h1>Products</h1>
      <div className="results__params">
        <span className="results__paramHeader">Search Params:</span>
        <div className="results__paramContainer">
          {selectedParams.map((param, i) => (
            <span className="results__param" key={param}>
              <span className="results__paramName">
                {param}
                :
              </span>
              <span className="results__paramValue">{getParamValues(param)}</span>
              {i < selectedParams.length - 1 && (
                <span className="results__paramDivider">|</span>
              )}
            </span>
          ))}
        </div>

      </div>
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
