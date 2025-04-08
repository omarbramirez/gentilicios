function Results({ searchedData }) {
  return (
    <div className="results--container">
      {searchedData ? (
        searchedData.map((lemma, lemmaIndex) => (
          <div key={`lemma-${lemmaIndex}`} className="lemma">
            <h2 className="lemma-sign">{lemma.lemmaSign}</h2>
            {lemma.variants && (
              <p>
                <span className="variantes-title">variantes: </span>
                <span>{lemma.variants}</span>
              </p>
            )}
            {lemma.sense?.map((sense, senseIndex) => (
              <div key={`sense-${senseIndex}`} className="sense">
                {/* Validación para Sense Number y Categoría Gramatical */}
                <div className="sense-header">
                  {sense.senseNumber && (
                    <span className="sense-number">{sense.senseNumber}.</span>
                  )}
                  {sense.categoríaGramatical && (
                    <span className="grammatical-category">
                      {sense.categoríaGramatical}
                    </span>
                  )}
                </div>

                {/* Validación para Definitions */}
                {sense.definitions?.map((definition, defIndex) => (
                  <div key={`def-${defIndex}`} className="definition">
                    {/* Validación para Acepción y Definición */}
                    <p className="definition-text">
                      {definition.acepción && (
                        <span className="acepcion">{definition.acepción}.</span>
                      )}{" "}
                      {definition.definición && (
                        <span
                          className="definicion"
                          dangerouslySetInnerHTML={{
                            __html: definition.definición
                              .replace(/<Bold>/g, "<strong class='bold'>")
                              .replace(/<\/Bold>/g, "</strong>"),
                          }}
                        />
                      )}
                      {definition.utc && (
                        <span className="utc"> {definition.utc}</span>
                      )}
                    </p>

                    {/* Validación para Examples */}
                    {definition.examples?.map((example, exIndex) => (
                      <div key={`ex-${exIndex}`} className="example">
                        {example.example && (
                          <p
                            className="example-text"
                            dangerouslySetInnerHTML={{
                              __html: example.example
                                .replace(/<Bold>/g, "<strong class='bold'>")
                                .replace(/<\/Bold>/g, "</strong>"),
                            }}
                          >
                            {/* {example.example
                              ? `"${example.example
                                  .replace(/<Bold>/g, "")
                                  .replace(/<\/Bold>/g, "")
                                  .trim()}"`
                              : null} */}
                          </p>
                        )}
                        {example.source && (
                          <p className="example-source">
                            <em>{example.source.trim()}</em>
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
            {lemma.variants && (
              <p className="observaciones">
                <span className="observaciones-title">Observaciones: </span>
                <span>{lemma.observations}</span>
              </p>
            )}
          </div>
        ))
      ) : (
        <div className="loading">Cargando...</div>
      )}
    </div>
  );
}

export default Results;
