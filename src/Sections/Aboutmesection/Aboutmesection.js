import React, { useState } from "react";
import "./aboutmesection.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import Modal from "react-modal";
import { Icon } from "semantic-ui-react";

export function Aboutmesection(props) {
  const { language } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");
  const [selectedCertification, setSelectedCertification] = useState({});

  const certifications = [
    {
      id: 1,
      title: "Programación Orientada a Objetos",
      subtitle: "Fundamentos de POO",
      thumbnail: "projects/POO.png",
      fullImage: "certifications/Poo-certificate.jpg",
      description: "Certificación en los principios fundamentales de la Programación Orientada a Objetos",
      icon: "code",
      color: "#512BD4"
    },
    {
      id: 2,
      title: "JavaScript Avanzado",
      subtitle: "ES6+ y Modern JavaScript",
      thumbnail: "projects/jq.png",
      fullImage: "certifications/JS.jpeg",
      description: "Certificación en JavaScript moderno, ES6+ y mejores prácticas",
      icon: "js",
      color: "#f7df1e"
    },
    {
      id: 3,
      title: "Data Analytics",
      subtitle: "Fundamentos de Análisis de Datos",
      thumbnail: "projects/data.png",
      fullImage: "certifications/Data-Analytics.jpg",
      description: "Certificación en fundamentos de análisis de datos y herramientas básicas",
      icon: "chart bar",
      color: "#47A248"
    }
  ];

  const openModal = (certification) => {
    setSelectedCertification(certification);
    setSelectedImage(certification.fullImage);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
    setSelectedCertification({});
  };

  return (
    <>
      <div id="about_me"></div>
      <div data-aos="fade-right" className="about_me_section">
        <h2 className="title_content">{language.certifications}</h2>
        <div className="about_me_content">
          <div className="about_me_img">
            <Player
              className="about_me_player"
              src="https://lottie.host/98a36679-a4fe-4383-ba30-324b95640f52/belvPl3QLO.json"
              background="transparent"
              speed="1"
              loop
              controls
              autoplay
              direction="1"
              mode="normal"
            ></Player>
          </div>
          <div className="certifications_container">
            <div className="certifications_grid">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="certification_card"
                  onClick={() => openModal(cert)}
                >
                  <div className="certification_icon" style={{ backgroundColor: cert.color }}>
                    <Icon name={cert.icon} size="large" />
                  </div>
                  <div className="certification_content">
                    <h3 className="certification_title">{cert.title}</h3>
                    <p className="certification_subtitle">{cert.subtitle}</p>
                    <p className="certification_description">{cert.description}</p>
                  </div>
                  <div className="certification_thumbnail">
                    <img src={cert.thumbnail} alt={cert.title} />
                  </div>
                  <div className="certification_overlay">
                    <Icon name="eye" size="large" />
                    <span>Ver certificado</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Certification Preview"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          {selectedImage && (
            <>
              <div className="modal-header">
                <h3>{selectedCertification.title}</h3>
                <button onClick={closeModal} className="close-button">
                  <Icon name="close" />
                </button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedImage}
                  alt={`Certification ${selectedCertification.title}`}
                  className="img_preview"
                />
                <div className="modal-info">
                  <h4>{selectedCertification.subtitle}</h4>
                  <p>{selectedCertification.description}</p>
                </div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </>
  );
}
