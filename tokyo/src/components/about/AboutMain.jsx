import React from "react";
import Modal from "react-modal";
import Testimonial from "./Testimonial";
import Intro from "./Intro";
import KnowledgeInterest from "./KnowledgeInterest";
import PersonalInfo from "./PersonalInfo";
import Resume from "./Resume";
import Skills from "./Skills";

Modal.setAppElement("#root");

const AboutMain = () => {
  return (
    <>
      <div className="container">
        <div className="tokyo_tm_about">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>About</span>
                <h3>About Me</h3>
              </div>
            </div>
          </div>
          {/* End title */}

          <Intro />
          <div className="tokyo_tm_short_info">
            <PersonalInfo />
          </div>
          {/* End personal info */}

          <div className="tokyo_tm_button" data-position="left">
          <a href="assets/img/cv.pdf" download>
              <span>Descargar CV</span>
            </a>
          </div>
        </div>
      </div>
      {/* End .container */}

      <div className="tokyo_tm_skillbox">
        <div className="container">
          <div className="in">
            <KnowledgeInterest />
          </div>
        </div>
      </div>
      {/* End .tokyo_tm_skillbox */}

      <div className="tokyo_tm_resumebox">
        <div className="container">
          <div className="in">
            <Resume />
          </div>
        </div>
      </div>
      {/* End tokyo_tm_resumebox */}


      {/* /ABOUT */}
    </>
  );
};

export default AboutMain;
