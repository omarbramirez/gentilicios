import { useEffect, useState } from "react";
import { fetchXMLData } from "../api/dataHandlers";
import { handleSearching } from "../controllers/searchControllers";

function SearchBar() {
  const [data, setData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const loadData = async () => {
      try {
        const xmlDoc = await fetchXMLData();
        setData(xmlDoc);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  useEffect(() => {
    let newSearchedData = handleSearching(inputText, data);
    setSearchedData(newSearchedData);
  }, [inputText]);

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    // handleSearching(inputText, data);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-input"
        placeholder="Search..."
        aria-label="Search"
        onChange={inputHandler}
        required
      />
      <button className="search-button">Search</button>
      <p>{inputText}</p>
      <div>
        {searchedData &&
          searchedData.map((lemma, index) => (
            <span key={`lemma-${index}`} className="lemma">
              <p>{lemma.lemmaSign}</p>
              {/* <p> {lemma.categoriaGramatical}</p> */}
            </span>
          ))}
      </div>
    </div>
  );
}

export default SearchBar;
