import React from "react";
import "./Header.css";
import profilePicture from "../../assets/1707427934491.jpeg";

const Header = () => {
  return (
    <div className="header">
      <img src={profilePicture} alt="Profile" className="profile-picture" />
      <div className="header-text">
        <h1>FRANCO GARCIA</h1>
        <h2>Técnico Universitario en Programación</h2>
        <p>
          {" "}
          Me recibí como Técnico Universitario en Programación a principios de julio de este año (2024) 
          y actualmente estoy buscando mi primera oportunidad laboral relacionada con la programación. 
          Me considero una persona responsable y organizada, deseando encontrar mi próxima experiencia profesional.
        </p>
      </div>
    </div>
  );
};

export default Header;
