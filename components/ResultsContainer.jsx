import React from 'react';
import ResultsItem from './ResultsItem';

function ResultsContainer({results}) {
  const resultsItems = Object.values(results).map(result => {
    return <ResultsItem result={result} key={result.name} />;
  });

  return (
    <section className="result-container">
      <h2>Results</h2>
      <ul>
        {resultsItems}
      </ul>
    </section>
  );
}

export default ResultsContainer;
