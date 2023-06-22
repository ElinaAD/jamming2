function SearchResults ({ results }) {
  return (
      <div className ="finalSearchResults">
          {results.length > 0 && (
              <table>
                  <thead>
                      <tr>
                          <th>First Name</th>
                          <th>Last Name</th>
                          <th>Movie</th>
                          <th>Year</th>
                      </tr>
                  </thead>
                  <tbody>
                      {results.map(item => (
                        <tr key={item.id}>
                          <td>{item.first_name}</td>
                          <td>{item.last_name}</td>
                          <td>{item.Movie}</td>
                          <td>{item.Year}</td>
                        </tr>
                      ))}
                  </tbody>
              </table>
          )}
      </div>
  );
}

export default SearchResults;
