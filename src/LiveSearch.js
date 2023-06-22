
function LiveSearchResults({ results }) {
    if (!results.length) {
      return null; // don't render anything if there are no results
    }
  
    return (
      <div className="live-search-results resultsDropdown">
        {results.map(result => (
          <div key={result.id} className="live-search-result">
            {result.first_name} {result.last_name}
          </div>
        ))}
      </div>
    );
  }
  
  export default LiveSearchResults;