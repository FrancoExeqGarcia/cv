import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export function DataAnalysis(props) {
  const { dataAnalysis, buttons } = props;

  if (!dataAnalysis || dataAnalysis.length === 0) {
    return <p>No hay proyectos de análisis de datos disponibles.</p>;
  }

  return (
    <>
      {dataAnalysis.map((project, index) => (
        <div key={index} className="item_card_dataanalysis" data-aos="zoom-in">
          <div className="image_card">
            {project.img && (
              <img
                src={project.img}
                alt={project.title || "Proyecto sin título"}
                title={project.title || "Proyecto sin título"}
              />
            )}
          </div>
          <div className="content_img">
            <h4 className="item_card_title">
              <Icon name={project.icon || "folder"} />{" "}
              {project.title || "Sin título"}
            </h4>
            <p>{project.content || "Sin descripción disponible."}</p>
            <div className="buttons">
              {project.code && (
                <Link
                  to={project.code}
                  target="_blank"
                  className="btn btn_yellow"
                >
                  <i
                    className="fas fa-file-excel"
                    style={{ color: "green", marginRight: "5px" }}
                  ></i>
                  {buttons.code || "Ver archivo Excel"}
                </Link>
              )}

              {project.video && (
                <Link
                  to={project.video}
                  target="_blank"
                  className="btn btn_red"
                >
                  <Icon name="youtube" /> {buttons.video || "Ver video"}
                </Link>
              )}
            </div>
          </div>
          <div className="technologies_card">
            {project.tecnology && project.tecnology.length > 0 ? (
              project.tecnology.map((tec, tecIndex) => (
                <span
                  key={tecIndex}
                  className={`tag ${project.tag?.[tecIndex] || ""}`}
                >
                  {tec}
                </span>
              ))
            ) : (
              <span className="tag">Sin tecnologías</span>
            )}
          </div>
        </div>
      ))}
    </>
  );
}
