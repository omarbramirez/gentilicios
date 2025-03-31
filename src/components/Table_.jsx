import { useEffect, useState } from "react";
import { fetchTableData } from "../api/dataHandlers";

function Table_() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchTableData();
      setData(fetchedData);
    };
    loadData();
  }, []);
  return (
    <div className="table--container">
      {data?.map((row) => (
        <div className="table--region">
          <table className="column--region">
            <thead>
              <tr>
                <th scope="col">REGIÓN</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>{row.region}</th>
              </tr>
              <tr>
                <td>
                  {row.gentilicios?.map((gentilicio) => (
                    <p>{gentilicio}</p>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th scope="col">PROVINCIA</th>
                <th scope="col">GENTILICIO</th>
                <th scope="col">VARIANTE</th>
                <th scope="col">CAPITAL</th>
                <th scope="col">GENTILICIO</th>
                <th scope="col">VARIANTE</th>
                <th scope="col">CIUDAD/CANTÓN</th>
                <th scope="col">GENTILICIO</th>
                <th scope="col">VARIANTE</th>
              </tr>
            </thead>
            {row.content?.map((table) => (
              <tbody>
                <tr>
                  <td>{table.provincia}</td>
                  <td>{table.provincia_gentilicio}</td>
                  <td>{table.provincia_variante}</td>
                  <td>{table.ciudad}</td>
                  <td>{table.ciudad_gentilicio}</td>
                  <td>{table.ciudad_variante}</td>
                  <td>
                    <ul>
                      {table.ciudades_cantones?.map((ciudad_canton) => (
                        <li>
                          <p>{ciudad_canton}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {table.gentilicios?.map((gentilicio) => (
                        <li>
                          <p>{gentilicio}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul>
                      {table.variantes?.map((variante) => (
                        <li>
                          <p>{variante !== "" ? variante : "\u00A0"}</p>
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      ))}
    </div>
  );
}

export default Table_;
