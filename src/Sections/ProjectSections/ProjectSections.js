import React, { useState } from "react";
import "./ProjectSections.scss";
import { ProjectMenu } from "./ProjectMenu";
import { Frontend } from "./Frontend";
import { Backend } from "./Backend";
import { Corporate } from "./Corporate";
import { DataAnalysis } from "./DataAnalysis";

export function ProjectSections(props) {
  const { language } = props;
  const [menu, setMenu] = useState("frontend");
  const components = {
    frontend: <Frontend frontend={language.projects.frontend} buttons={language.projects.buttons} />,
    backend: <Backend backend={language.projects.backend} buttons={language.projects.buttons} />,
    corporate: <Corporate corporate={language.projects.corporate} buttons={language.projects.buttons} />,
    dataAnalysis: <DataAnalysis dataAnalysis={language.projects.dataAnalysis} buttons={language.projects.buttons} /> 
  };

  return (
    <>
      <div id="projects"></div>
      <div className="project_sections">
        <div data-aos="zoom-in">
          <h2 className="title_content">{language.title}</h2>
          <ProjectMenu menu={menu} setMenu={setMenu} language={language} />
        </div>
        <div className="project_container">
        {components[menu]}
        </div>
      </div>
    </>
  );
}
