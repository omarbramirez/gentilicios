import React from "react";
import searchIcon from "../assets/icons/search.svg";
import mapIcon from "../assets/icons/map.svg";
const ProyectoInfo = ({ toggleSearchBar, toggleModernTable }) => {
  return (
    <div className="proyecto-info">
      <div className="proyecto-info-module">
        <h1 className="proyecto-info__header">Sobre este proyecto</h1>
        <p className="proyecto-info__subtitle">
          Conoce el trabajo de la Comisión de Lexicografía detrás de esta
          herramienta y la importancia de preservar el patrimonio lingüístico
          ecuatoriano.
          <br />
          <br />
          El Glosario de gentilicios del Ecuador es el resultado de un trabajo
          riguroso realizado durante el año 2024 por la Comisión de Lexicografía
          de la Academia Ecuatoriana de la Lengua. Nuestro propósito fue
          documentar, definir y ejemplificar los gentilicios de las provincias,
          capitales y más de 200 cantones del Ecuador.
          <br />
          <br />
          La investigación se desarrolló en varias fases. En primer lugar, se
          hizo una revisión exhaustiva de fuentes escritas —páginas web y redes
          oficiales de municipios, Gobiernos Autónomos Descentralizados (GAD),
          periódicos locales, etc.— para recopilar y sistematizar los
          gentilicios existentes. Posteriormente, se validó cada entrada
          mediante llamadas a los GAD municipales y conversaciones con
          periodistas de varias regiones, lo cual permitió confirmar usos
          vigentes y corregir ambigüedades.
          <br />
          <br />
          Durante meses, los miembros de la comisión de lexicografía —integrada
          por los académicos Fernando Miño-Garcés, Julio Pazos Barrera, Marco
          Antonio Rodríguez y Diego Araujo Sánchez, el bibliotecario Alejandro
          Casares y las lexicógrafas Valeria Guzmán, Jéssica Cevallos, Daniela
          Vera e Iskra Silva— participaron en reuniones de trabajo colectivo,
          complementadas por investigación individual. Este esfuerzo procuró un
          tratamiento cuidadoso de cada gentilicio, su definición, la
          documentación de variantes morfológicas y ejemplos contextualizados
          tomados de fuentes oficiales.
          <br />
          <br />
          El proyecto fue digitalizado a través de un software especializado en
          diseñado, creación y gestión de diccionarios y bases de datos
          terminológicas. El trabajo realizado dio como resultado este buscador,
          pensado para que toda nuestra comunidad pueda acceder fácilmente a una
          parte esencial del patrimonio lingüístico ecuatoriano.
        </p>
      </div>
      <div className="proyecto-info-module" id="proyecto-info-module-buttons">
        <button onClick={toggleSearchBar} className="icon-button">
          <img src={searchIcon} alt="Buscar" />
          <span className="icon-desc">
            Consulta de forma rápida y sencilla los gentilicios de provincias,
            capitales y cantones del Ecuador.
          </span>
        </button>
        <button onClick={toggleSearchBar} className="icon-button">
          <img src={mapIcon} alt="Buscar" />
          <span className="icon-desc">
            Consulta de forma rápida y sencilla los gentilicios de provincias,
            capitales y cantones del Ecuador.
          </span>
        </button>
      </div>
    </div>
  );
};

export default ProyectoInfo;
