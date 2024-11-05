import React, { useState } from "react";
import "./aboutmesection.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import Modal from 'react-modal';

export function Aboutmesection(props) {
  const { language } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (imagePath) => {
    setSelectedImage(imagePath);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedImage("");
  };

  return (
    <>
      <div id="about_me"></div>
      <div data-aos="fade-right" className="about_me_section">
        <h2 className="title_content">{language.title}</h2>
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
          <div className="about_me_info">
            <p dangerouslySetInnerHTML={{ __html: language.content_One }}></p>
            <p dangerouslySetInnerHTML={{ __html: language.content_Two }}></p>
            <p dangerouslySetInnerHTML={{ __html: language.content_Three }}></p>
          </div>
        </div>
        <h2 className="title_content">
          {language.certifications}
        </h2>
        <img
          className="img_certifications"
          src={"../../../cv/projects/POO.png"}
          alt="Certification POO"
          onClick={() => openModal("../../../cv/certifications/Poo-certificate.jpg")}
        />
        <img
          className="img_certifications"
          src={"../../../cv/projects/jq.png"}
          alt="Certification JS"
          onClick={() => openModal("../../../cv/certifications/JS.jpeg")}
        />
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Preview"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Certification Preview"
              className="img_preview"
            />
          )}
          <button onClick={closeModal} className="close-button">Cerrar</button>
        </div>
      </Modal>
    </>
  );
}
