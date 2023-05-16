import React from "react";

const Intro = () => {
  const introContent = {
    image: "assets/img/slider/1.jpg",
    name: "Victor Gallo",
    designation: "Web Developer",
    text: (
      <>
        <p> 
      Creativo Inteligente. Front-End Developer | HTML | CSS | Bootstrap | JavaScript | React | API`S | GIT |

Conocimientos técnicos, experiencia práctica, analítico, antecedentes empresariales, competitivo, amigable para el usuario, resolución de problemas y generación de ideas, curiosidad, asunción de riesgos, autogestión, apertura, enfoque, buena comunicación, carisma, agente de cambio.
        </p>

      </>
    ),
  };

  return (
    <>
      <div className="top_author_image">
        <img src={introContent.image} alt="about" />
      </div>
      <div className="about_title">
        <h3>{introContent.name}</h3>
        <span>{introContent.designation}</span>
      </div>
      <div className="about_text">{introContent.text}</div>
    </>
  );
};

export default Intro;
