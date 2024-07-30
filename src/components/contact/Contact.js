import React, { useState } from 'react';
import "../contact/contact.css";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="contact">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Ocultar Información' : 'Mostrar Información'}
      </button>
      {isVisible && (
        <div className="contact-info">
          <p>Teléfono: (+549) 341-6991069</p>
          <p>Mail: francoexequiel_garcia@hotmail.com</p>
          <p>Dirección: Urquiza 2706 - Rosario - Santa Fe</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
