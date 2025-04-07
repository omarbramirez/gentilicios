import { useEffect, useState } from "react";
import { fetchTableData } from "../api/dataHandlers";

function Table_() {
  const [data, setData] = useState(null);
  const [selectedRegion, setselectedRegion] = useState(0);
  const [selectedProvince, setSelectedProvince] = useState({
    provincia: "",
    provincia_gentilicio: "",
    provincia_variante: "",
    ciudad: "",
    ciudad_gentilicio: "",
    ciudad_variante: "",
    ciudades_cantones: [],
    gentilicios: [],
    variantes: [],
  });

  const toggleRegion = (region) => {
    setselectedRegion((prev) => (prev === region ? prev : region));
    setSelectedProvince({
      provincia: "",
      provincia_gentilicio: "",
      provincia_variante: "",
      ciudad: "",
      ciudad_gentilicio: "",
      ciudad_variante: "",
      ciudades_cantones: [],
      gentilicios: [],
      variantes: [],
    });
  };

  const toggleProvince = (province, provinceIndex) => {
    setSelectedProvince((prev) =>
      prev.provincia === province
        ? null
        : data[selectedRegion]?.content[provinceIndex]
    );
    setSelectedProvince(data[selectedRegion]?.content[provinceIndex]);
  };

  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchTableData();
      if (fetchedData && fetchedData.length > 0) {
        setData(fetchedData);
        // setSelectedProvince(fetchedData[0]?.content?.[0] || null);
      }
    };
    loadData();
  }, []);

  return (
    <div id="regions--module">
      <div className="table--container">
        <div className="table--region">
          <table className="column--region">
            <thead>
              <tr>
                <th className="column--region--element">REGIONES</th>
              </tr>
            </thead>

            {data?.map((row, rowIndex) => (
              <tbody key={`region-${row.region}`}>
                <tr className="column--region--button">
                  <td className="column--region--element">
                    <button onClick={() => toggleRegion(rowIndex)}>
                      {row.region}
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>
                    {selectedRegion === rowIndex &&
                      row.gentilicios?.map((gentilicio) => (
                        <p
                          className="column--region--element"
                          key={`gentilicio-${gentilicio}`}
                        >
                          {gentilicio}
                        </p>
                      ))}
                  </td>
                </tr>
                <tr>
                  <td className="provinces--lists">
                    {selectedRegion === rowIndex &&
                      data[selectedRegion]?.content.map(
                        (province, provinceIndex) => (
                          <button
                            key={`province-${province.provincia}`}
                            onClick={() =>
                              toggleProvince(province, provinceIndex)
                            }
                          >
                            {province.provincia}
                          </button>
                        )
                      )}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>

          {selectedProvince.provincia.length > 0 && (
            <div className="table--content">
              <table>
                <thead>
                  <tr>
                    <th scope="col">PROVINCIA</th>
                    <th scope="col">GENTILICIO</th>
                    {selectedProvince.provincia_variante.length > 0 && (
                      <th scope="col">VARIANTE</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedProvince.provincia}</td>
                    <td>{selectedProvince.provincia_gentilicio}</td>
                    {selectedProvince.provincia_variante.length > 0 && (
                      <td>{selectedProvince.provincia_variante}</td>
                    )}
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th scope="col">CAPITAL</th>
                    <th scope="col">GENTILICIO</th>
                    {selectedProvince.ciudad_variante.length > 0 && (
                      <th scope="col">VARIANTE</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedProvince.ciudad}</td>
                    <td>{selectedProvince.ciudad_gentilicio}</td>
                    {selectedProvince.ciudad_variante.length > 0 && (
                      <td>{selectedProvince.ciudad_variante}</td>
                    )}
                  </tr>
                </tbody>
              </table>
              <table>
                <thead>
                  <tr>
                    <th scope="col">CIUDAD/CANTÓN</th>
                    <th scope="col">GENTILICIO</th>
                    {selectedProvince.variantes.length > 1 && (
                      <th scope="col">VARIANTE</th>
                    )}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <ul>
                        {selectedProvince.ciudades_cantones?.map(
                          (ciudad_canton, i) => (
                            <li key={`ciudad_canton-${ciudad_canton}-${i}`}>
                              <p>{ciudad_canton}</p>
                            </li>
                          )
                        )}
                      </ul>
                    </td>
                    <td>
                      <ul>
                        {selectedProvince.gentilicios?.map((gentilicio, i) => (
                          <li key={`gentilicio-${gentilicio}-${i}`}>
                            <p>{gentilicio}</p>
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td>
                      {selectedProvince.variantes.length > 1 && (
                        <ul>
                          {selectedProvince.variantes.map((variante, i) => (
                            <li key={`variante-${variante}-${i}`}>
                              <p>{variante !== "" ? variante : "\u00A0"}</p>
                            </li>
                          ))}
                        </ul>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Table_;
