import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar';
import Data from './mock_data';
import SearchResults from './SearchResults';

function App() {

  const [searchValue, setSearchValue] = useState("");
  const [liveResults, setLiveResults] = useState([]);
  const [finalResults, setFinalResults] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
    // Update live search results as user types
    setLiveResults(
      Data.filter(item => 
        Object.values(item).some(val => 
          String(val).toLowerCase().includes(e.target.value.toLowerCase())
        )
      )
    );
  }

  const handleSearchSubmit = (e) => {
    // This prevents the default form submission behavior
    //e.preventDefault();
    // Set finalResults state when the function is called
    setFinalResults(liveResults);
  }
  
  const handleKeyPress = (e) => {
    // Only call the handleSearchSubmit function when the Enter key is pressed
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  
  }
  return (
    <div className="App">
      <SearchBar 
        searchValue={searchValue} 
        handleSearchChange={handleSearchChange} 
        handleSearchSubmit={handleSearchSubmit}
        liveResults={liveResults} 
        handleKeyPress={handleKeyPress}
      />
      <SearchResults results={finalResults} />
    </div>
  );
}

export default App;
