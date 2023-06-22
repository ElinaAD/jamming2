import React from 'react';
import LiveSearchResults from './LiveSearch';

function SearchBar({ searchValue, handleSearchChange, handleSearchSubmit, liveResults, handleKeyPress }) {

  return (
    <div>
      <div className="searchBox">
        <input 
          className="searchInput"
          type="text" 
          placeholder="Search..." 
          value={searchValue}
          onChange={handleSearchChange}
          onKeyDown={handleKeyPress} // Search when Enter key is pressed
        />
        <button
          className="searchButton"
          onClick={handleSearchSubmit}
          // Search when button is clicked
        >
          Search
        </button>
        <LiveSearchResults 
        className ="resultsDropdown"
        results={liveResults} />
      </div>
     
    </div>
  );
}

export default SearchBar;

