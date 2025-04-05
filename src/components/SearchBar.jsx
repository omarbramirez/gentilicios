import { useEffect, useState } from "react";
import { fetchXMLData } from "../api/dataHandlers";
import { handleSearching } from "../controllers/searchControllers";
import { alphabet } from "../utils/searchBarUtils";
import Results from "./Results";

function SearchBar() {
  const [data, setData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("");
  // const [grammaticalCategories, setGrammaticalCategories] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const xmlDoc = await fetchXMLData();
        setData(xmlDoc);
        setInputText("a");
      } catch (err) {
        setError(err);
      }
    };
    loadData();
  }, []);

  useEffect(() => {
    let newSearchedData = handleSearching(inputText, data);
    setSearchedData(newSearchedData);
  }, [inputText]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
    handleSearching(inputText, data);
  };

  return (
    <div id="search--module">
      <div className="search--container">
        <input
          type="text"
          className="search--input"
          placeholder="Buscar gentilicio..."
          aria-label="Buscar gentilicio"
          onChange={inputHandler}
          required
        />
        <ul className="alphabet--box">
          {alphabet &&
            alphabet.map((letter) => (
              <li key={`letter-${letter}`} className="alphabet--element">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setInputText(letter);
                  }}
                  className="alphabet--button"
                >
                  {letter}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <Results searchedData={searchedData} />
    </div>
  );
}

export default SearchBar;
