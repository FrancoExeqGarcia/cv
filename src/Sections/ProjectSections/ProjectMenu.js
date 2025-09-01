import React, { useRef } from "react";
import { ArrowHint } from "./ArrowHint";
import "./ArrowHint.scss";

export function ProjectMenu(props) {
  const { menu, setMenu, language } = props;
  const menuRef = useRef(null);
  const handleChangeMenu = (menu) => {
    setMenu(menu);
  };
  return (
    <>
      <div className="menu_projects" ref={menuRef}>
        <button
          className={`btn ${menu === "frontend" ? "active" : ""}`}
          onClick={() => handleChangeMenu("frontend")}
        >
          {language?.projects?.sections?.frontend || "Frontend"}
        </button>
        <button
          className={`btn ${menu === "backend" ? "active" : ""}`}
          onClick={() => handleChangeMenu("backend")}
        >
          {language?.projects?.sections?.backend || "Backend"}
        </button>
        <button
          className={`btn ${menu === "corporate" ? "active" : ""}`}
          onClick={() => handleChangeMenu("corporate")}
        >
          {language?.projects?.sections?.corporate || "Corporate"}
        </button>
      </div>
      <ArrowHint containerRef={menuRef} />
    </>
  );
}
