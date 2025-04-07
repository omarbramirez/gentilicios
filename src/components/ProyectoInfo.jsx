import React from "react";

const ProyectoInfo = ({ toggleSearchBar, toggleModernTable }) => {
  return (
    <div className="proyecto-info">
      <h1 className="proyecto-info__header">Sobre este proyecto</h1>
      <p className="proyecto-info__content">
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
        La investigación se desarrolló en varias fases. En primer lugar, se hizo
        una revisión exhaustiva de fuentes escritas —páginas web y redes
        oficiales de municipios, Gobiernos Autónomos Descentralizados (GAD),
        periódicos locales, etc.— para recopilar y sistematizar los gentilicios
        existentes. Posteriormente, se validó cada entrada mediante llamadas a
        los GAD municipales y conversaciones con periodistas de varias regiones,
        lo cual permitió confirmar usos vigentes y corregir ambigüedades.
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
  );
};

export default ProyectoInfo;
