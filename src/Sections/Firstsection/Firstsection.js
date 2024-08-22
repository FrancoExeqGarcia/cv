import React, { useRef, useEffect, useState } from "react";
import Typed from "typed.js";
import "./firstsection.scss";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "semantic-ui-css/components/icon.min.css";

export function Firstsection(props) {
  const [password, setPassword] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);
  const { language } = props;
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        `&lt;${language.FS.rol.dev}/&gt;`,
        `&lt;${language.FS.rol.ing}/&gt;`,
      ],
      typeSpeed: 100,
      backSpeed: 50,
      startDelay: 200,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  }, [language]);
  const handlePasswordSubmit = () => {
    const userPassword = prompt('Please enter the password:');
    const correctPassword = "123456";

    if (userPassword === correctPassword) {
      setIsAuthorized(true);
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div id="franco" className="first-block">
      <div data-aos="fade-down" className="img_block">
        <div className="avatar_main"></div>
      </div>
      <div className="about_me_block">
        <h2 data-aos="fade-down">{language.FS.title}</h2>
        <div className="dev_title">
          <span ref={el} className="dev_title_span"></span>
        </div>
        <span
          data-aos="zoom-in"
          className="summary_about_me"
          dangerouslySetInnerHTML={{ __html: language.FS.content }}
        ></span>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-200"
          className="icons_profile"
        >
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/franco-garcia-13ba53155/"
            title="linkedin"
            aria-label="linkedin red social"
          >
            <Icon size="large" name="linkedin" />
          </Link>
          <Link
            target="_blank"
            to="https://github.com/FrancoExeqGarcia"
            title="github"
            aria-label="github"
          >
            <Icon size="large" name="github" />
          </Link>
          <Link
            to="mailto:francoexequiel.garcia150@gmail.com"
            title="mail"
            aria-label="mail"
          >
            <Icon size="large" name="mail" />
          </Link>
        </div>{" "}
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-250"
          className="download_button"
        >
          <button
            className="btn btn_yellow"
            onClick={() => {
              const userPassword = prompt("Please enter the password:");
              setPassword(userPassword);
              handlePasswordSubmit();
            }}
          >
            ENSOLVERS <Icon name="download" />
          </button>
          {isAuthorized && (
            <a
              className="btn btn_yellow"
              download
              href={`/cv/document/${language.FS.ensolvers}.zip`}
            >
              Download <Icon name="download" />
            </a>
          )}
        </div>
        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="-250"
          className="download_button"
        >
          <a
            className="btn btn_yellow"
            download
            href={`/cv/document/${language.FS.document}.pdf`}
          >
            {language.FS.button} <Icon name="download" />
          </a>
        </div>
      </div>
    </div>
  );
}
