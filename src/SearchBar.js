

function SearchBar  ({ searchValue, setSearchValue, handleSearch }) {
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }

    return (
        <div>
            <div className="searchBox">
            <input 
                className="searchInput"
                type="text" 
                placeholder="Search..." 
                value={searchValue} 
                onChange={handleInputChange}
            />
            <button
                className="searchButton"
             onClick={handleSearch}>
                Search            </button>
            </div>
        </div>
    );
}

export default SearchBar;
