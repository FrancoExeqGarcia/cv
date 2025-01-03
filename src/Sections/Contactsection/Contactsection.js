import React, { useState } from "react";
import "./contactsection.scss";
import emailjs from "@emailjs/browser";
import { Player } from "@lottiefiles/react-lottie-player";
import { Icon, Button } from "semantic-ui-react";
import "semantic-ui-css/components/button.min.css";

export function Contactsection(props) {
  const { language } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [messagealert, SetMessageAlert] = useState("");
  const [typeclass, SetTypeClass] = useState("alert error");
  const [isSent, SetIsSent] = useState(true);

  const sendContactForm = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const templateParams = {
      user_name: e.target.user.value,
      user_email: e.target.email.value,
      message: e.target.message.value,
    };

    if (isSent) {
      SetIsSent(false);

      emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          templateParams
        )
        .then(
          () => {
            SetTypeClass("alert success");
            SetMessageAlert("Tu correo fue enviado");
          },
          (error) => {
            SetTypeClass("alert error");
            SetMessageAlert(`Error al enviar el correo: ${error.text}`);
            console.error("Error al enviar el correo:", error);
          }
        )
        .finally(() => {
          setIsLoading(false);
        });
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
              <div onClick={() => SetMessageAlert("")} className={typeclass}>
                <span className="alertClose">X</span>
                <span className="alertText">
                  {messagealert}
                  <br className="clear" />
                </span>
              </div>
            )}
          </div>
          <div className="contact_info">
            <Player
              className="contact_player"
              src="https://lottie.host/1d4a413a-a510-4b26-a63f-0aeeb8e0f561/MPkHLJM8qN.json"
              background="transparent"
              speed="1"
              loop
              autoplay
            ></Player>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contactsection;
