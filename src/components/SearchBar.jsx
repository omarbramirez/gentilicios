import { useEffect, useState } from "react";
import { fetchXMLData } from "../api/dataHandlers";

function SearchBar() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const xmlDoc = await fetchXMLData(); // Fetch the XML data
        setData(xmlDoc); // Set the XML document to state
      } catch (err) {
        setError(err); // Handle errors
      } finally {
        setLoading(false); // Set loading to false
      }
    };
    loadData(); // Call the async function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Show error state
  }

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        aria-label="Search"
      />
      <button className="search-button">Search</button>
      <div>{data && data.length > 0 && <p> hello {data[0]}</p>}</div>
    </div>
  );
}

export default SearchBar;
