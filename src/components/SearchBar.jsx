import { useEffect, useState } from "react";
import { fetchXMLData } from "../api/dataHandlers";
import { handleSearching } from "../controllers/searchControllers";
import { alphabet } from "../utils/searchBarUtils";

function SearchBar() {
  const [data, setData] = useState(null);
  const [searchedData, setSearchedData] = useState(null);
  const [error, setError] = useState(null);
  const [inputText, setInputText] = useState("");
  const [grammaticalCategories, setGrammaticalCategories] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const xmlDoc = await fetchXMLData();
        setData(xmlDoc);
        setGrammaticalCategories(["adj."]);
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
    // handleSearching(inputText, data);
  };

  return (
    <div>
      <div className="search--container">
        <input
          type="text"
          className="search--input"
          placeholder="Buscar..."
          aria-label="Buscar"
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
        {/* {grammaticalCategories && (
          <select name="select">
            <option value=" ">Categoría Gramatical...</option>
            {grammaticalCategories.map((category) => (
              <option key={`category-${category}`} value={category}>
                {category}
              </option>
            ))}
          </select>
        )} */}
      </div>
      <div className="results--container">
        {searchedData ? (
          searchedData.map((lemma, index) => (
            <span key={`lemma-${index}`} className="lemma">
              <p>
                {lemma.lemmaSign} {lemma.categoriaGramatical}
                {lemma.definiciones.map((def) => (
                  <p key={`definicion-${def.definicion}-${def.acepcion}`}>
                    {def.acepcion}: {def.definicion}
                  </p>
                ))}
              </p>
            </span>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
