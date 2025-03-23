import { useEffect, useState } from "react";
import { fetchXMLData } from "../api/dataHandlers";

function SearchBar() {
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const xmlDoc = await fetchXMLData(); // Fetch the XML data

        // Extract <Definition.Definición> elements
        const definitionElements = xmlDoc.getElementsByTagName("Lemma");
        const definitionsArray = Array.from(definitionElements).map(
          (el) => el.textContent
        );

        setDefinitions(definitionsArray); // Set definitions to state
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
      <div>
        <h3>Definitions:</h3>
        <ul>
          {definitions.map((definition, index) => (
            <li key={index}>{definition}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SearchBar;
