import { useState } from 'react';
import './App.css';
import SearchBar from './SearchBar' 


function App() {

const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    // Perform the search operation here
    console.log(`Searching for: ${searchValue}`);
}
  

  return (
    <div className="App">
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} handleSearch={handleSearch} />
    
    </div>
  );
}

export default App;
