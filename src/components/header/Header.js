import React from "react";
import "./Header.css";
import profilePicture from "../../assets/1707427934491.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="header-text">
        <h1>FRANCO GARCIA</h1>
        <h2>PROGRAMMING STUDENT</h2>
        <p>
          {" "}
          Me graduaré como Técnico Universitario en Programación a principios de
          julio de este año (2024) y actualmente estoy buscando mi primera
          oportunidad laboral relacionada con la programación. Me considero una
          persona responsable y organizada, deseando encontrar mi próxima
          experiencia profesional. En mi tiempo libre, ocasionalmente disfruto
          viendo conferencias de programación y contenido relacionado para
          ampliar aún más mis conocimientos.
        </p>
      </div>
    </div>
  );
};

export default Header;
