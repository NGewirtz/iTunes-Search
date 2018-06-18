import React from 'react';
import SearchButton from './SearchButton';
import ResultsContainer from './ResultsContainer';
import { getSearchResults } from '../util/api';

class Search extends React.Component {

  constructor() {
    super();
    this.state = {
      results: [],
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  async handleSearch() {
    const searchTerm = document.getElementById("search-term").value;
    let results = await getSearchResults(searchTerm);
    this.setState({results});
  }

  render() {
    return (
      <main>
        <h1>iTunes Search</h1>
        <SearchButton handleSearch={this.handleSearch} placeholder="Artist"/>
        <ResultsContainer results={this.state.results}/>
      </main>
    );
  }
}

export default Search;
