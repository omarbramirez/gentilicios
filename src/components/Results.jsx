function Results({ searchedData }) {
  return (
    <div className="results--container">
      {searchedData ? (
        searchedData.map((lemma, lemmaIndex) => (
          <div key={`lemma-${lemmaIndex}`} className="lemma">
            <h2 className="lemma-sign">{lemma.lemmaSign}</h2>

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
                        <span className="definicion">
                          {definition.definición}
                        </span>
                      )}
                      {definition.utc && (
                        <span className="utc"> {definition.utc}</span>
                      )}
                    </p>

                    {/* Validación para Examples */}
                    {definition.examples?.map((example, exIndex) => (
                      <div key={`ex-${exIndex}`} className="example">
                        {example.example && (
                          <p className="example-text">
                            "{example.example.replace(/<Bold>|<\/Bold>/g, "")}"
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
          </div>
        ))
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
}

export default Results;
