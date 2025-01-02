import React from "react";

export function DataAnalysis({ dataAnalysis = [], buttons = {} }) {
  if (!dataAnalysis.length) {
    return <p>No hay proyectos de análisis de datos disponibles.</p>;
  }

  return (
    <div>
      {dataAnalysis.map((project, index) => (
        <div key={index} className="project">
          <h3>{project.title}</h3>
          <p>{project.content}</p>
          <img src={project.img} alt={project.title} />
          <div className="technologies">
            {project.tecnology.map((tech, idx) => (
              <span key={idx}>{tech}</span>
            ))}
          </div>
          <div className="buttons">
            {buttons.code && <a href={project.code}>{buttons.code}</a>}
            {project.video && <a href={project.video}>{buttons.video}</a>}
          </div>
        </div>
      ))}
    </div>
  );
}
