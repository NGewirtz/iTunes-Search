import React from 'react';

function SearchButton({handleSearch, placeholder}) {
  return (
    <section className="search-button">
      <input id="search-term" placeholder={placeholder}></input>
      <button onClick={handleSearch}>Search</button>
    </section>
  );
}

export default SearchButton;
