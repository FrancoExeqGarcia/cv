import React from "react";
import "../education/education.css";

const Education = () => {
  return (
    <div className="education">
      <h2>EDUCACIÓN</h2>
      <ul>
        <li>
          <h3>Técnico Universitario</h3>
          <p>
            Egresado en la carrera de Técnico Universitario en
            Programación (TUP) en la Universidad Tecnológica Nacional.
          </p>
        </li>
        <li>
          <h3>Universidad Nacional de Rosario</h3>
          <p>
            Aprobé 15 materias del programa de Contabilidad Pública en la
            Universidad Nacional de Rosario (2012 - 2017)
          </p>
        </li>
        <li>
          <h3>Escuela Secundaria</h3>
          <p>
            Diploma de Escuela Secundaria en Economía y Gestión de las
            Organizaciones. ISPI N° 9085 "Santa Rosa de Viterbo". San Lorenzo,
            Santa Fe. (2011)
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Education;
