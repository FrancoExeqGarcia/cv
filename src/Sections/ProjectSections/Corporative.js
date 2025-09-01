import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

export function Corporative(props) {
  const { corporate, buttons } = props;
  return (
    <>
      {corporate.map((project, index) => (
        <div key={index} className="item_card_corporative" data-aos="zoom-in">
          <div className="corporative_content_img">
            <img src={project.img} alt={project.title} title={project.title} />
          </div>
          <div className="corporative_content_card">
            <h4 className="corporative_content_card_title">
              <Icon name={project.icon} /> {project.title}
            </h4>
            <div className="corporative_content_card_text">
              {project.content.map((content, index) => (
                <p key={index}>{content}</p>
              ))}
              <Link
                to={project.code}
                target="_blank"
                className="btn btn_yellow float-right"
              >
                <Icon name="github" /> {buttons.code}
              </Link>
              {/* <Link to={project.video} target="_blank" className="btn btn_red float-right"><Icon name="youtube" /> {buttons.video}</Link> */}
            </div>
            <div className="corporative_content_card_tags ">
              {project.tecnology.map((tec, index) => (
                <span key={index} className={`tag ${project.tag[index]}`}>
                  {tec}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
