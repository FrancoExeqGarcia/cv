import React, { useState } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/components/button.min.css";

export function Contact(props) {
  const { language } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [messagealert, SetMessageAlert] = useState("");
  const [typeclass, SetTypeClass] = useState("alert error");
  const [isSent, SetIsSent] = useState(true);

  const sendContactForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Inicializa EmailJS con la clave pública
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);

    // Obtiene los valores del formulario
    let templateParams = {
      user_name: e.target.user.value,
      user_email: e.target.email.value,
      message: e.target.message.value,
    };

    if (isSent) {
      SetIsSent(false);

      // Envía el correo
      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams
        )
        .then(
          function () {
            SetTypeClass("alert success");
            SetMessageAlert("Tu correo fue enviado");
            setIsLoading(false);
          },
          function (error) {
            SetTypeClass("alert error");
            SetMessageAlert(`Error al enviar el correo: ${error.text}`);
            setIsLoading(false);
            console.error('Error al enviar el correo:', error);
          }
        );
    } else {
      SetTypeClass("alert error");
      SetMessageAlert("Tu correo ya fue enviado");
      setIsLoading(false);
    }
  };

  return (
    <>
      <div id="contact"></div>
      <div
        data-aos="fade-up"
        data-aos-offset="-200"
        data-aos-anchor-placement="center-bottom"
        className="contact_section"
      >
        <h4 className="title_content">{language.title}</h4>
        <p>
          {language.info} <strong>{language.email}</strong>
        </p>
        <div className="contact_content">
          <div className="form_contact">
            <form onSubmit={sendContactForm}>
              <input
                type="text"
                placeholder={language.name}
                className="contact_input"
                name="user"
                required
              />
              <input
                type="email"
                placeholder={language.mail}
                className="contact_input"
                name="email"
                required
              />
              <textarea
                name="message"
                className="contact_textarea"
                placeholder={language.content}
                required
              ></textarea>
              <Button loading={isLoading} type="submit" color="violet">
                <Icon name="send" />
                {language.button}
              </Button>
            </form>
            {messagealert && (
              <label>
                <input type="checkbox" className="alertCheckbox" />
                <div onClick={() => SetMessageAlert("")} className={typeclass}>
                  <span className="alertClose">X</span>
                  <span className="alertText">
                    {messagealert}
                    <br className="clear" />
                  </span>
                </div>
              </label>
            )}
          </div>
          <div className="contact_info">
            <Player
              className="contact_player"
              src="https://lottie.host/1d4a413a-a510-4b26-a63f-0aeeb8e0f561/MPkHLJM8qN.json"
              background="transparent"
              speed="1"
              loop
              controls
              autoplay
              direction="1"
              mode="normal"
            ></Player>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;