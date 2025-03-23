import { useState } from "react";

function SearchBar() {
  const [data, setData] = useState(null);

  return (
    <div class="search-container">
      <input
        type="text"
        class="search-input"
        placeholder="Search..."
        aria-label="Search"
      />
      <button class="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
