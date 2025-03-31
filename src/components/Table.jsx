import { useEffect, useState } from "react";
import { fetchTableData } from "../api/dataHandlers";

function Table() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const loadData = async () => {
      const fetchedData = await fetchTableData();
      setData(fetchedData);
    };
    loadData();
  }, []);
  return (
    <div>
      <table>
        <caption>UWU</caption>
        <thead>
          <tr>
            <th>REGIÓN</th>
            <th>PROVINCIA</th>
            <th>GENTILICIO</th>
            <th>VARIANTE</th>
            <th>CAPITAL</th>
            <th>GENTILICIO</th>
            <th>VARIANTE</th>
            <th>CIUDAD/CANTÓN</th>
            <th>GENTILICIO</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row, i) => (
            <tr key={`region-${i}`}>
              <th>
                <h1>{row.region}</h1>
                <span>
                  {row.gentilicios?.map((gentilicio, i) => (
                    <p key={`gentilicio-${i}`}>{gentilicio}</p>
                  ))}
                </span>
              </th>
              <td>
                {row.provincias?.map((provincia, i) => (
                  <p key={`provincia-${i}`}>{provincia.nombre}</p>
                ))}
              </td>
              <td>
                {row.provincias?.map((provincia, i) => (
                  <p key={`provincia-gentilicio-${i}`}>
                    {provincia.gentilicio}
                  </p>
                ))}
              </td>
              <td>
                {row.provincias?.map((provincia, i) => (
                  <p key={`provincia-variante-${i}`}>{provincia.variante}</p>
                ))}
              </td>
              <td>
                {row.provincias?.map((provincia, i) => (
                  <p key={`capital-${i}`}>{provincia.capital.nombre}</p>
                ))}
              </td>
              <td>
                {row.provincias?.map((provincia, i) => (
                  <p key={`capital-gentilicio-${i}`}>
                    {provincia.capital.gentilicio}
                  </p>
                ))}
              </td>
              <td>
                {row.provincias?.map((provincia, i) => (
                  <p key={`capital-variante-${i}`}>
                    {provincia.capital.variante}
                  </p>
                ))}
              </td>
              <td>
                {row.provincias?.map((provincia) =>
                  provincia.capital.ciudades_cantones.nombres?.map(
                    (ciudad_canton, i) => (
                      <p keyx={`ciudad_canton-${i}`}>{ciudad_canton}</p>
                    )
                  )
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
