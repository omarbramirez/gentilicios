import { useState } from "react";
import ModernTable from "./components/ModernTable";
import SearchBar from "./components/SearchBar";
import ProyectoInfo from "./components/ProyectoInfo";
import searchIcon from "./assets/icons/search.svg";
import mapIcon from "./assets/icons/map.svg";
import importantIcon from "./assets/icons/important.svg";

function App() {
  const [showButtons, setShowButtons] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showModernTable, setShowModernTable] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(true);
    setShowModernTable(false);
    setShowInfo(false);
    setShowButtons(false);
  };

  const toggleModernTable = () => {
    setShowModernTable(true);
    setShowSearchBar(false);
    setShowInfo(false);
    setShowButtons(false);
  };

  const toggleInfo = () => {
    setShowInfo(true);
    setShowSearchBar(false);
    setShowModernTable(false);
    setShowButtons(false);
  };

  return (
    <div>
      {/* <h1 className="header">Glosario de gentilicios del Ecuador</h1> */}
      {showButtons && (
        <div className="icon-button-list">
          <button onClick={toggleInfo} className="icon-button">
            <img src={importantIcon} alt="justificación" />
            <b>Sobre este proyecto</b>
            <span className="icon-desc">
              Conoce el trabajo de la Comisión de Lexicografía detrás de esta
              herramienta y la importancia de preservar el patrimonio
              lingüístico ecuatoriano.
            </span>
          </button>
          <button onClick={toggleSearchBar} className="icon-button">
            <img src={searchIcon} alt="busqueda" />
            <b>Buscador de gentilicios</b>
            <span className="icon-desc">
              Consulta de forma rápida y sencilla los gentilicios de provincias,
              capitales y cantones del Ecuador.
            </span>
          </button>
          <button onClick={toggleModernTable} className="icon-button">
            <img src={mapIcon} alt="regiones" />
            <b>Tabla general de gentilicios</b>
            <span className="icon-desc">
              Consulta de forma rápida y sencilla los gentilicios de provincias,
              capitales y cantones del Ecuador.
            </span>
          </button>
        </div>
      )}
      {!showButtons && (
        <>
          <div className="toggle-buttons">
            <button onClick={toggleInfo} disabled={showInfo} id={"infoButton"}>
              {showInfo ? "Información Activa" : "Mostrar más Información"}
            </button>
            <button
              onClick={toggleSearchBar}
              disabled={showSearchBar}
              id={"searchBarButton"}
            >
              {showSearchBar
                ? "Buscador Activo"
                : "Mostrar Buscador de gentilicios"}
            </button>

            <button
              onClick={toggleModernTable}
              disabled={showModernTable}
              id={"modernTableButton"}
            >
              {showModernTable
                ? "Tabla Activa"
                : "Mostrar Tabla general de gentilicios"}
            </button>
          </div>
          <div id="modules">
            {showInfo && <ProyectoInfo />}
            {showSearchBar && <SearchBar />}
            {showModernTable && <ModernTable />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
