// src/components/AdditionalInformation.js
import React from "react";
import "../additionalInformation/additionalInformation.css";

const AdditionalInformation = () => {
  return (
    <div className="additional-information">
      <h2>INFORMACIÓN ADICIONAL</h2>
      <ul>
        <li>
          Idioma: Inglés, entre nivel pre-intermedio e intermedio (A2 - B1)
        </li>
        <li>
          Tecnologías usadas en TUP: PSeint, C Language, Python, C#, React,
          Javascript (cursos trimestrales)
        </li>
        <li>
          Cursos completados sobre Programación Orientada a Objetos en Udemy en
          2020
        </li>
        <li>
          2017 – 2018: Desarrollo de páginas web freelance. Dominio de HTML 5,
          CSS 3, Bootstrap 4 y JavaScript.
        </li>
        <li>
          Habilidades Informáticas: Dominio de Windows, Paquete de Microsoft
          Office, Apache Office, Hojas de cálculo de Google y Google Slides
        </li>
      </ul>
    </div>
  );
};

export default AdditionalInformation;
