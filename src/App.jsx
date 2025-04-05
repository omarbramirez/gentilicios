import { useState } from "react";
import ModernTable from "./components/ModernTable";
import SearchBar from "./components/SearchBar";
import ProyectoInfo from "./components/ProyectoInfo";

function App() {
  const [showInfo, setShowInfo] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [showModernTable, setShowModernTable] = useState(false);

  const toggleSearchBar = () => {
    setShowSearchBar(true);
    setShowModernTable(false);
    setShowInfo(false);
  };

  const toggleModernTable = () => {
    setShowModernTable(true);
    setShowSearchBar(false);
    setShowInfo(false);
  };

  return (
    <div
      style={{
        display: "grid",
        width: "100%",
      }}
    >
      {showInfo && (
        <ProyectoInfo
          toggleSearchBar={toggleSearchBar}
          toggleModernTable={toggleModernTable}
        />
      )}
      {!showInfo && (
        <>
          <div className="toggle-buttons">
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
            {showSearchBar && <SearchBar />}
            {showModernTable && <ModernTable />}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
