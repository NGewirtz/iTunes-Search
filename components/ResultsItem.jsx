import React from 'react';

function ResultsItem({result}) {
  return (
    <li>
      <img src={result.img} />
      <p>{result.name}</p>
    </li>
  );
}

export default ResultsItem;
